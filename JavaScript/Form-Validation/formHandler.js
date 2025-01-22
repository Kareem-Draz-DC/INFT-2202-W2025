

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
    let isFormValid = true
    let formInputs = eventObj.target.elements
    console.log([...formInputs])



    // Email
    let inputEmail = formInputs.inputEmail4.value

    // Phone Number
    let inputPhone = formInputs.inputPhone.value

    // Password
    let passwordOne = formInputs.inputPassword4.value
    let passwordTwo = formInputs.inputPassword5.value

    // ZIP Code
    let inputZip = formInputs.inputZip.value
    // isFormValid = validateForm(inputEmail, inputPhone, passwordOne, passwordTwo, inputZip)
    if (isFormValid) {
        confirmDetails([...formInputs])
    }
}

function confirmDetails(inputArr) {
    // Grab the form
    // let form = document.getElementById("registrationForm")
    let form = document.querySelector("#registrationForm") // CSS Selector
    // Hide the form
    form.setAttribute("hidden", "true")
    // Change the contents of the inside of the registration-container DIV to a summary of all the information they inputted
    let registrationContainer = document.querySelector(".registration-container") 

    // Iterate over inputArr and for each input let's create a new <p> and set the contents of the element to the input data. And then we will append this element to the registration-container

    document.querySelector("h1").innerText = "Confirmation Page"

    inputArr.forEach(function(inputElement) {
        console.log(inputElement)
        let newParagraph = document.createElement("p")
        newParagraph.innerText = inputElement.value
        registrationContainer.appendChild(newParagraph)
    })

    // Add a confirmation button at the bottom of the summary
    let confirmationBtn = document.createElement("button")
    confirmationBtn.innerText = "Confirm Details"
    confirmationBtn.addEventListener("click", submitRegistration)
    registrationContainer.append(confirmationBtn)


    // Once the user clicks the confirmation button, call the submitRegistration() function (i.e. use addEventListener())
}

function submitRegistration() {
    // Hide the summary
    // Show a message in a <div> that confirms the user has submitted their registration form
    alert("Registration SUBMITTED!!!")
}


/*
    Validator Functions Below
*/
function validateForm(inputEmail, inputPhone, passwordOne, passwordTwo, inputZip) {
    // let status;
    // status = validateEmail(inputEmail) ? true :  false
    // status = validatePhoneNumber(inputPhone) ? true : false
    // status = validatePassword(passwordOne, passwordTwo) ? true : false
    // status = validateZip(inputZip) ? true : false
    // return status
    if (!validateEmail(inputEmail) || !validatePhoneNumber(inputPhone) || !validatePassword(passwordOne, passwordTwo) || !validateZip(inputZip)) {
        return false
    }
    return true
}

function validateZip(inputZip) {
    if (inputZip.length !== 6) {
        alert("Please input a valid zipcode.")
        return false
    }
     return true
}

function validatePassword(passwordOne, passwordTwo) {
    if (passwordOne !== passwordTwo) {
        alert("Passwords do not match. Please check that both passwords match")
        return false
    }
    return true
}

function validatePhoneNumber(inputPhone) {
    if (inputPhone.length !== 10) {
        alert("Please put in a valid phone number")
        return false
    }
    return true
}

function validateEmail(inputEmail) {
    if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
        alert("Email needs to have @ symbol and . !!!!")
        return false
    }
    return true
}
/*
    End of Validator Functions
*/