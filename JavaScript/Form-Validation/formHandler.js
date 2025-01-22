

// Validate Form Information

// 0. Add an event listener for form submission
// 1. Grab the form from the DOM
// 2. Iterate through all the elements and ensure there are no empty fields
// 3. Ensure the following formats are met: 
//     - Email must include ' @' symbol and '.'
//     - Phone number has 10 digits
//     - Password must be minimum 5 characters
//     - ZIP Code must be 6 characters

let registrationForm = document.getElementById("registrationForm")

registrationForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(eventObj) {
    eventObj.preventDefault();
    let formInputs = eventObj.target.elements
    console.dir(eventObj.target)
    // Email Validation
    console.dir(formInputs.inputEmail4.value)
    if (!formInputs.inputEmail4.value.includes("@") || !formInputs.inputEmail4.value.includes(".")) {
        alert("Email needs to have @ symbol and . !!!!")
    }
    // Phone Number, Password, ZIP code
}