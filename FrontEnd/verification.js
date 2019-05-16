if (typeof (Storage) !== "undefined") {
    // Store the data:!!
    localStorage.username = "username";
    localStorage.password = "password";
    localStorage.email = "email";
    // Retrieve the data!!
    document.getElementById("result").innerHTML = localStorage.username;
    document.getElementById("result").innerHTML = localStorage.password;
    document.getElementById("result").innerHTML = localStorage.email;
} else {
    document.getElementById("result").innerHTML = "No can do baby-doll, your browser does not support Web Storage...";
};

function check(form) {
    document.getElementById
    if (form.username.value == "username" && form.password.value == "password" && form.email.value == "email") {
        window.open('app.html')
    }
    else {
        alert("Error: Incorrect/Missing Username, Password, or Email")
    }
};

function check(form) {
    if (form.username.value == "username" && form.password.value == "password") {
        window.open('app.html')
    }
    else {
        alert("Error: Incorrect/Missing Username or Password")
    }
};