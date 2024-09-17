let apiUrl = "https://66e84a14b17821a9d9dc20f9.mockapi.io/users";

let userId = sessionStorage.getItem('userId');
console.log("in main page user id id : " + sessionStorage.getItem('userId'))
let navList = document.getElementById('navUl');
let signOutBTN = document.createElement('button');
let signinLi=document.getElementById('signinLi')
let signupLi=document.getElementById('signupLi')

signOutBTN.textContent="sign out"

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                if (element.id == userId) {
                    let userNameLi = document.createElement('li');
                    signOutBTN.setAttribute('id', 'signOutBTN')
                    signOutBTN.setAttribute('class', 'sign-out-btn')
                    userNameLi.setAttribute('id', 'userNameLi')
                    userNameLi.setAttribute('class', 'user-name-li')
                    userNameLi.textContent = "Welcome " + element.username;
                    signinLi.remove()
                    signupLi.remove()
                    navList.appendChild(signOutBTN)
                    navList.appendChild(userNameLi)
                }
            });
        })




signOutBTN.addEventListener("click",()=> {
    sessionStorage.clear()
    window.location.href = "login.html";
})
