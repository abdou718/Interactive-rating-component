const submitButton = document.querySelector(".Submit"); // Select the Submit button
const rateButtons = document.querySelectorAll(".rate"); // Select all rating buttons
const card1 = document.querySelector(".one"); // First card (Rating card)
const card2 = document.querySelector(".two"); // Second card (Thank you card)
const error = document.querySelector(".error"); // Error message
let selectedRating = 0; // To store the user's rating

// Add event listener to each rating button
rateButtons.forEach((button) => {
    button.addEventListener("click", function () {
        // Reset background color for all buttons
        rateButtons.forEach((btn) => {
            btn.style.backgroundColor = "var(--background)";
            btn.style.color = "var(--LightGrey)";
        });

        // Set background color for the selected button
        button.style.backgroundColor = "hsl(25, 97%, 53%)";
        button.style.color = "white";
        selectedRating = button.textContent; // Store the selected rating
    });
});

// Function to handle submission
function handleSubmit() {
    if (selectedRating === 0) {
        error.style.display = "block"; // Show error message
        error.textContent = "Please select a rating before submitting.";
        return;
    }

    // Hide card1 and show card2
    card1.style.display = "none";
    card2.style.display = "block";

    // Display selected rating inside the span
    const spanElement = document.querySelector("span");
    spanElement.textContent = `You selected ${selectedRating} out of 5`;
}

// Attach event listener to the submit button
submitButton.addEventListener("click", handleSubmit);