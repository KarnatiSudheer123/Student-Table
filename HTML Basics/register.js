const form = document.getElementById("registrationForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("messege");
form.addEventListener("submit",function(event) {
    event.preventDefault();
    if(password.value.length<6) {
        message.textContent = "Password must be at least 8 characters.";
        message.className = "message error";
        return;
    }
    if(password.value!==confirmPassword.value) {
        message.textContent = "Passwords do not match.";
        message.className = "message error";
        return;
    }
    message.textContent = "Registration Successful!";
    message.className = "message success";
    form.reset();
});