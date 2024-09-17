let apiUrl = "https://66e84a14b17821a9d9dc20f9.mockapi.io/users";

let emailInput = document.getElementById('emailInput');

let passInput = document.getElementById('passwordInput');

let signinBTN = document.getElementById('signInBoxBtn');



signinBTN.addEventListener("click", () => {

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("userData")

            let userData = data.filter(element => emailInput.value == element.email && passInput.value == element.password);
            console.log("userData")
            if (userData.length>0) {
                let userId = userData[0].id;
                sessionStorage.setItem('userId', userId);
                console.log(sessionStorage.getItem('userId'));
                window.location.href = "index.html";
            } else {
                window.alert("Incorrect email or password");
            }


        })


})