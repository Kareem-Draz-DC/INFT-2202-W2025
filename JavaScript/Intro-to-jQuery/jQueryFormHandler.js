console.log("jQuery file ran!")
let registrationForm = $("#registrationForm")
registrationForm.on("submit", handleFormSubmit)
function handleFormSubmit(eventObj) {
    eventObj.preventDefault();
    let isFormValid = true;
    let formInputs = eventObj.target.elements // Find a way to grab these elements with jQuery
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
    let form = $("#registrationForm")
    // Hide the form using jQuery
    form.hide();
    let registrationContainer = $(".registration-container")
    $(".title").html("Confirmation Page")
    inputArr.forEach(function(inputElement) {
        registrationContainer.append(`<p>${inputElement.value}</p>`)
    })
    registrationContainer.append("<button id='confirmBtn'>Confirm Details</button>")
    $("#confirmBtn").on("click", submitRegistration)
}
function submitRegistration () {
    alert("Details confirmed!")
}


/*
    Validator Functions Below
*/
function validateForm(inputEmail, inputPhone, passwordOne, passwordTwo, inputZip) {
    return validateEmail(inputEmail) && validatePhoneNumber(inputPhone) && validatePassword(passwordOne, passwordTwo) && validateZip(inputZip)
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