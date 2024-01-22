let form = document.getElementById("form")
let email = document.getElementById("email")
let password = document.getElementById("password")

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log(email.value, password.value);
    let userDetails = {
        email : email.value,
        password : password.value,
    }
//    console.log(userDetails);
let savedDetails =JSON.parse(localStorage.getItem("userDetails")) || {};
// Example console.log("savedDetails, savedDetails");
if(userDetails.email===savedDetails.email && userDetails.password===savedDetails.password){
     localStorage.setItem("isAuth","Authenticated")
    // console.log("User is Authenticated");
    alert("Login Success!");
}
else{
    alert("Wrong Credentails");
}
})