// Form validation
document.getElementById("registerForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let message = document.getElementById("message");

let inputs = document.querySelectorAll("input");
inputs.forEach(input => input.classList.remove("error"));

if(name === "" || email === "" || password === "" || confirmPassword === ""){

inputs.forEach(input => {
if(input.value === ""){
input.classList.add("error");
}
});

message.style.color = "red";
message.textContent = "All fields are required!";
return;
}

if(password.length < 6){
message.style.color = "red";
message.textContent = "Password must be at least 6 characters.";
return;
}

if(password !== confirmPassword){
message.style.color = "red";
message.textContent = "Passwords do not match!";
return;
}

message.style.color = "green";
message.textContent = "Registration successful!";

});


// Password strength indicator
let passwordInput = document.getElementById("password");
let strength = document.getElementById("strength");

passwordInput.addEventListener("input", function(){

let value = passwordInput.value;

if(value.length < 6){
strength.textContent = "Weak password";
strength.style.color = "red";
}
else if(value.length < 10){
strength.textContent = "Medium password";
strength.style.color = "orange";
}
else{
strength.textContent = "Strong password";
strength.style.color = "green";
}

});