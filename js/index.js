const cart = document.querySelectorAll(".cart");
const quantity = document.querySelector(".quantity");
const sidebar = document.querySelector(".click-area");
const cartMenu = document.querySelector(".hor1");
const cartBox = document.querySelector("#cart-box");
const cartDetails = document.querySelector(".cart-details");
const keepShopping = document.querySelector(".keep-shopping");

let x = 1;
function addToCart(event) {
    event.preventDefault()
    quantity.style.display = "block";
    cartMenu.setAttribute('href',"checkout.html");

    console.log(x);
    quantity.innerHTML = x;
    console.log(event.detail);


    cartBox.style.display = "block";
    cartDetails.innerHTML += `<div class="product-line">
                            <img src="images/skyrim-logo.jpg" class="gamepicture-cart" alt="Skyrim logo">
                            <p class="cart-info">Product</p>
                            <p class="cart-info">Qty: 1</p>
                            <p class="cart-info">Prize: xxxx</p>
                            </div>`
    x = x + 1;
}


function removeCartDetails() {
    cartBox.style.display = "none";
}

keepShopping.addEventListener("click", removeCartDetails);
sidebar.addEventListener("click", addToCart);


/*function addToCart(event) {
    event.preventDefault();
    cart.style.borderRadius = "50%";
    cart.innerHTML = event.detail;
    cart.style.width = "0px";

    console.log(event.detail)

    var rect = cart.getBoundingClientRect();
    cartMenu.appendChild(cart);
}*/