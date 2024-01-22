let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if(isAuth !== "Authenticated"){
    //User is not Authenticated
    window.location.href = "./login.html";
}