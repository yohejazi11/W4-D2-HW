let apiUrl="https://66e84a14b17821a9d9dc20f9.mockapi.io/users";

let usernameInput=document.getElementById('userNameInput');

let emailInput=document.getElementById('emailInput');

let passInput=document.getElementById('passwordInput');

let signupBTN=document.getElementById('signUpBoxBtn');



signupBTN.addEventListener("click",()=>{
    if(usernameInput.value.length<=5){
        window.alert("user name should be more the five charachter")
    }
    else if(!emailInput.value.includes('@')){
        window.alert("please enter a correct email")

    }
    else if(passInput.value.length<8){
        window.alert(" password should be more the eight charachter")
    }
    else{
        fetch(apiUrl,{
            method:'POST',
            body:JSON.stringify({
                username:usernameInput.value,
                email:emailInput.value,
                password:passInput.value
            }),
            headers: {"Content-Type": "application/json"}
        })
    }
    
})