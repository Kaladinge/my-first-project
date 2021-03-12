const cart = document.querySelector(".cart");
const cartMenu = document.querySelector(".hor1");

function addToCart(event) {
    event.preventDefault();
    cart.style.borderRadius = "50%";
    cart.innerHTML = event.detail;
    cart.style.width = "0px";

    console.log(event.detail)

    var rect = cart.getBoundingClientRect();
    cartMenu.appendChild(cart);
}

cart.addEventListener("click", addToCart);
