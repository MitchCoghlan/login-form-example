var passwordField = document.getElementById("password");
var showPassword = document.getElementById("show-password");
var loginBtn = document.getElementById("login-btn");

// Check if the show password checkbox is checked and show the password field contents

showPassword.addEventListener("click", togglePasswordVisibility);

async function togglePasswordVisibility() {
  if (showPassword.checked === true) {
    passwordField.type = "text";  
  }else {
    passwordField.type = "password";
  }
} 

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Insure that the username and password are not empty
  if (username === "" || password === "") {
    document.getElementById("error-msg").textContent = "Please enter a username and password!";
    return;
  }
}

loginBtn.addEventListener("click", login)