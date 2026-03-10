document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
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