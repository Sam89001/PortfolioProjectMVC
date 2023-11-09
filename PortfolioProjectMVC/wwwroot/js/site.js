// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.



projectImages = document.getElementById("project-images");
topImage = document.getElementById("top-image");
bottomImage = document.getElementById("bottom-image");

projectImages.addEventListener('mouseenter', function () {
    topImage.style.transformOrigin = 'left bottom'; // Set the origin to the bottom left corner
    topImage.style.transform = 'rotate(-10deg)';

    bottomImage.style.transformOrigin = 'left bottom'; // Set the origin to the bottom left corner
    bottomImage.style.transform = 'rotate(10deg)';
});

projectImages.addEventListener('mouseleave', function () {
    topImage.style.transform = 'rotate(0deg)'; // Reset to original position
    bottomImage.style.transform = 'rotate(0deg)'; // Reset to original position
});




function validateEmail() {
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var queryInput = document.getElementById("queryInput");
    var checkboxInput = document.getElementById("checkboxInput");

    // Check if any of the required fields is empty
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || queryInput.value.trim() === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }

    // Check if the email contains at least one "@" and "."
    var emailPattern = /@.*\./;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // Check if the checkbox is ticked
    if (!checkboxInput.checked) {
        alert("Please tick the checkbox to proceed.");
        return false; // Prevent form submission
    }

    // If all checks pass, allow form submission
    return true;
}

// Example of handling the return value and showing a custom alert
function onSubmitForm() {
    if (!validateEmail()) {
        alert("Please enter correct information.");
    }
}