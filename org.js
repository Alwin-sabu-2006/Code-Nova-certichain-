window.createAccount = function () {

    let orgName = document.getElementById("orgName").value;
    let email = document.getElementById("email").value;
    let website = document.getElementById("website").value;
    let password = document.getElementById("password").value;

    if (orgName === "" || email === "" || website === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Organization account created successfully!");

    console.log("Organization:", orgName);
    console.log("Email:", email);
    console.log("Website:", website);
};
