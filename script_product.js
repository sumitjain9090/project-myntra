let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if (isAuth !== "Authenticated") {
    //User is not Authenticated
    window.location.href = "./login.html";
}

let productsDiv = document.getElementById("products")
let mainData = [];

function displayProducts(data) {
    data.forEach((obj) => {

        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = obj.title;
        let img = document.createElement("img");
        img.src = obj.image;
        img.style.height = "100px";
        let price = document.createElement("p");
        price.innerText = `₹${obj.price}`;
        let rating = document.createElement("p");
        rating.innerText = `${obj.rating.rate} stars`;
        div.append(h3, img, price, rating)
        productsDiv.append(div)
    });
}
function sortCustomerRating() {
    mainData.sort(function (a, b) {
        return b.rating.rate - a.rating.rate;
    })
    //previous will get erase
    productsDiv.innerHTML = null;
    displayProducts(mainData);
}
function sortPriceLowToHigh() {
    mainData.sort(function (a, b) {
        return a.price - b.price;
    })
    //previous will get erase
    productsDiv.innerHTML = null;
    displayProducts(mainData);
}

function sortPriceHighToLow() {
    mainData.sort(function (a, b) {
        return b.price - a.price;
    })
    //previous will get erase
    productsDiv.innerHTML = null;
    displayProducts(mainData);
}

function sortPopularity() {
    mainData.sort(function (a, b) {
        return b.price - a.price;
    })
    //previous will get erase
    productsDiv.innerHTML = null;
    displayProducts(mainData);
}

fetch("./db.json")
    .then((res) => res.json())
    .then((data) => {
        mainData = data;
        displayProducts(mainData)
    })
    .catch((err) => console.log(err));


