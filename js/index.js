const cart = document.querySelectorAll(".cart");
const quantity = document.querySelector(".quantity");
const sidebar = document.querySelector(".click-area");
const cartMenu = document.querySelector(".hor1");


function addToCart(event) {
    event.preventDefault()
    quantity.style.display = "block";
    cartMenu.setAttribute('href',"checkout.html");
    quantity.innerHTML = event.detail;
    console.log(event.detail)
}

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