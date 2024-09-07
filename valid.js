// Validation Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

function validated() {
    if (email.value !== "sfit@gmail.com") {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value !== "TEIT-B4") {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    
    // If email and password are correct
    alert("Successfully signed in");
    window.location.href = "home.html";
    return false; // Prevent form submission
}

function email_Verify() {
    if (email.value === "sfit@gmail.com") {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }
}

function pass_Verify() {
    if (password.value === "TEIT-B4") {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
    }
}
