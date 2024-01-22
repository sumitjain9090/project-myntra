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
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    // console.log("Submit Button Clicked!")
})