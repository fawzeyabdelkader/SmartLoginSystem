// var usernameInput=document.getElementById('usernameInput');
// var userEmailInput=document.getElementById('userEmailInput');
// var userPasswordInput=document.getElementById('userPasswordInput');

// var userInfo;

// if (localStorage.getItem("users")===null){
//     userInfo=[];  
//  }else{
//    userInfo= JSON.parse(localStorage.getItem("users"));
 
//  }


// function signUp(){
// // window.alert('Please enter')
// userInputsValidation();
// isExist();

// if (userInputValidation()==true&&isExist()==false){
//     var user={
//     name:usernameInput.value,
//     email:userEmailInput.value,
//     password:userPasswordInput.value
// };

// userInfo.push(user);
// // console.log(userInfo)
// localStorage.setItem("users",JSON.stringify(userInfo));
// // window.location="login.html";
// var confirmMsg=document.getElementById('confirmMsg');
// confirmMsg.classList.replace('d-none','d-block');
// var signIn=document.getElementById('signIn');
// signIn.classList.replace('d-none','d-block');
// }
// else{
//     var tryAgainMsg=document.getElementById('tryAgainMsg');
//     tryAgainMsg.classList.replace('d-none','d-block');
// }

// }

// function usernameValidation(){
//     var usernameAlert=document.getElementById('usernameAlert');
//     var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
//     if( regex.test(usernameInput.value) == true && usernameInput.value!= "")
//     {
//         usernameInput.classList.add("is-valid");
//         usernameInput.classList.remove("is-invalid");
//         usernameAlert.classList.replace("d-block", "d-none");
//         return true;
//     }
//     else
//     {
//         usernameInput.classList.add("is-invalid");
//         usernameInput.classList.remove("is-valid");
//         usernameAlert.classList.replace("d-none", "d-block");

//         return false
//     }


// }

// function userPasswordValidation()
// {
//     var regex = /^.{5,15}$/;
//     var userPasswordAlert = document.getElementById("userPasswordAlert");

//     if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
//     {
//         userPasswordInput.classList.add("is-valid");
//         userPasswordInput.classList.remove("is-invalid");
//         userPasswordAlert.classList.replace("d-block", "d-none");

//         return true
//     }
//     else
//     {
        
//         userPasswordInput.classList.add("is-invalid");
//         userPasswordInput.classList.remove("is-valid");
//         userPasswordAlert.classList.replace("d-none", "d-block");

//         return false
//     }
// }
// function userEmailValidation()
// {
//     var userEmailAlert = document.getElementById("userEmailAlert");

//     var regex = /@[a-z]{5,10}(\.com)$/;
//     if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
//     {
//         userEmailInput.classList.add("is-valid");
//         userEmailInput.classList.remove("is-invalid");
//         userEmailAlert.classList.replace("d-block", "d-none");

//         return true
//     }
//     else
//     {
        
//         userEmailInput.classList.add("is-invalid");
//         userEmailInput.classList.remove("is-valid");
//         userEmailAlert.classList.replace("d-none", "d-block");

//         return false
//     }
// }




// function isExist() {
//     var accountExistMsg=document.getElementById('accountExistMsg');
//     for(var i=0;i<userInfo.length;i++)
//     if (userInfo[i].name.toLowerCase()==usernameInput.value.toLowerCase()||
//     userInfo[i].email.toLowerCase()==userEmailInput.value.toLowerCase())
//     {
//      usernameInput.classList.remove("is-valid");
//      userEmailInput.classList.remove("is-valid");
//      accountExistMsg.classList.replace("d-none","d-block");
//      return true;

//     }else{
//         return false;
//     }
// }


// function userInputsValidation()
// {
//     usernameValidation();   
//     userEmailValidation();
//     userPasswordValidation();

//     if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true))
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// }



// var username=localStorage.getItem("sessionUsername")

// function login(){
//     var loginEmail=document.getElementById("login-email");
//     var loginPassword=document.getElementById("login-password");
//     var loginBtn=document.getElementById("loginBtn");
//     var wrongMsg=document.getElementById("wrongMsg");

//     if (loginEmail.value==""||loginPassword.value==""){
//         var fillMsg=document.getElementById("fillMsg");
//         fillMsg.classList.replace("d-none", "d-block");
//         return false;
//     }
//     for (var i=0; i<userInfo.length;i++){
//         if (userInfo[i].email.toLowerCase()==loginEmail.value.toLowerCase()
//         &&  userInfo[i].password.toLowerCase()==loginPassword.value.toLowerCase())
//     {
//             localStorage.setItem('sessionUsername', userInfo[i].name);
//             loginBtn.setAttribute("href","welcome.html")
//             // window.location="index.html";
//         }
//         else {
         
//             wrongMsg.classList.replace("d-none", "d-block");
//         }
//     }
// }


// function displayWelcomeUser(){
//     document.getElementById("username").innerHTML="Welcome"+username;
// }


// function logout(){
//     localStorage.removeItem('sessionUsername');
//  }







var usernameInput = document.getElementById("usernameInput"); 
var userEmailInput = document.getElementById("userEmailInput"); 
var userPasswordInput = document.getElementById("userPasswordInput"); 
var signupBtn = document.getElementById("signupBtn"); 

var usersInfo;
if(localStorage.getItem("users") == null)
{
    usersInfo = [];
}
else
{
    usersInfo = JSON.parse(localStorage.getItem("users"));
}
function signUp()
{

    userInputsValidation();
    isExist();

    if(userInputsValidation() == true && isExist() == false)
    {
        var user = 
        {
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        usersInfo.push(user)
        localStorage.setItem("users", JSON.stringify(usersInfo));
        var confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
        var signIn = document.getElementById("signIn")
        signIn.classList.replace("d-none", "d-block");
    }
    else
    {
        var tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
    }
  
}

function usernameValidation()
{
    var usernameAlert = document.getElementById("usernameAlert");

    var regex = /^[A-Za-z]{1,10}(\s?[A-Za-z]{3,10})?$/
    if( regex.test(usernameInput.value) == true && usernameInput.value != "")
    {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function userPasswordValidation()
{
    var regex = /^.{5,15}$/;
    var userPasswordAlert = document.getElementById("userPasswordAlert");

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function userEmailValidation()
{
    var userEmailAlert = document.getElementById("userEmailAlert");

    var regex = /@[a-z]{5,10}(\.com)$/;
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function isExist()
{
    var accountExistMsg = document.getElementById("accountExistMsg");
    
    for(var i = 0; i < usersInfo.length; i++)
    {

        if(usersInfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() || usersInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase())
        {
            accountExistMsg.classList.replace("d-none", "d-block");
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");

            return true
        }
    }
    return false
}
function userInputsValidation()
{
    usernameValidation();   
    userEmailValidation();
    userPasswordValidation();

    if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true))
    {
        return true
    }
    else
    {
        return false
    }
}



var username = localStorage.getItem("sessionUsername");
function login()
{
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var loginBtn = document.getElementById("loginBtn");
    var wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        var fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < usersInfo.length; i++)
    {
        if(usersInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && usersInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
            
            localStorage.setItem('sessionUsername', usersInfo[i].name)
            loginBtn.setAttribute("href", "welcome.html");
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
}
function displayWelcomeUser()
{
    document.getElementById("username").innerHTML = "Welcome "+ username;

}


function logout() {
    localStorage.removeItem('sessionUsername')
}
// function navbarOptions(){
    
//     back.classList.replace("d-block", "d-none");
// }
function navbarOptions(){
    logout()
    back.classList.replace("d-none", "d-block");
}



// function toggleLogout() {
//     var navOptionBtn = document.getElementById("navOptionBtn");
//     if (navOptionBtn.style.display === "none") {
//         navOptionBtn.style.display = "block";
//     } else {
//         navOptionBtn.style.display = "none";
//     }
// }

// function toggleVisibility() {
//     var hiddenButton = document.getElementById("hiddenButton");
//     if (hiddenButton.style.display === "none") {
//         hiddenButton.style.display = "block";
//     } else {
//         hiddenButton.style.display = "none";
//     }
// }

function toggleElement() {
    var hiddenElement = document.getElementById("hiddenElement");
    if (hiddenElement.style.display === "none") {
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
    }
}

