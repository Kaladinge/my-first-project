const number = document.querySelector("#picknumber");
const errorNumber = document.querySelector("#numberError");
const address = document.querySelector("#pickname");
const errorAddress = document.querySelector("#nameError");
const login = document.querySelector("#login");
const paymentError = document.querySelector("#paymentError");
const deliveryError = document.querySelector("#deliveryError");
const button = document.querySelector(".button");

function validateNumber(event) {
    if (lenCheck(event.target.value, 3) === true && !isNaN(event.target.value)) {
        errorNumber.style.display = "none";
    } else {
        errorNumber.style.display = "block";
    }
}

function validateAddress(event) {
    if (lenCheck(event.target.value, 8) === true) {
        errorAddress.style.display = "none";
    } else {
        errorAddress.style.display = "block";
    }
}

function pickPayment(event) {

    event.preventDefault()

    var getDelivery = document.querySelector('input[name="delivery"]:checked');
    var getPayment = document.querySelector('input[name="payment-boxes"]:checked');

if (validateRadio(getDelivery) === true) {
    deliveryError.style.display = "none";
} else {
    deliveryError.style.display = "block";
}

if (validateRadio(getPayment) === true) {
    paymentError.style.display = "none";
} else {
    paymentError.style.display = "block";
}


if (validateRadio(getDelivery) === true && validateRadio(getPayment) === true && lenCheck(address.value, 8) === true && lenCheck(number.value, 3) && !isNaN(number.value)) {
    console.log("Hi");
    console.log(address.value);
    console.log(number.value);
    
    button.innerHTML = `<a href="checkout-success.html" id="login"> Checkout</a>`
}


    //console.log(radiobuttons.checked);
}



function validateRadio(check) {
    if (check != null) {
        return true;
    paymentError.style.display = "none";
} else {
    return false;
    paymentError.style.display = "block";
}
}

function lenCheck(item, len) {
    if (item.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

number.addEventListener("blur", validateNumber);
address.addEventListener("blur", validateAddress);
login.addEventListener("click", pickPayment);


