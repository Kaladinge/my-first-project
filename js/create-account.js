const nickName = document.querySelector("#pickname");
const errorName = document.querySelector("#nameError");
const birthDay = document.querySelector("#pick_bday");
const errorBirthDay = document.querySelector("#bdayError");
const inputEmail = document.querySelector("#pick_email");
const errorEmail = document.querySelector("#emailError");
const password = document.querySelector("#pick_password");
const errorPassword = document.querySelector("#passwordError");
const passwordConfirm = document.querySelector("#confirm_password");
const errorPasswordConfirm = document.querySelector("#passwordConfirmError");

function validateNickname(event) {
    if (lencheck(nickName.value, 2) === true) {
    errorName.style.display = "none";
    } else {
    errorName.style.display = "block";
    }
}

function validateBirthday(event) {
    if (lencheck(birthDay.value, 8) === true) {
    errorBirthDay.style.display = "none";
    } else {
    errorBirthDay.style.display = "block";
    }
}

function validateEmail(event) {
    if (emailCheck(inputEmail.value) === true) {
        errorEmail.style.display = "none";
    } else {
        errorEmail.style.display = "block";
    }
}

function validatePassword(event) {
    if (lencheck(password.value, 8) === true) {
        errorPassword.style.display = "none";
    } else {
        errorPassword.style.display = "block";
    }

    console.log(password.value);
}

function validateConfirmPassword(event) {
    if (passwordConfirm.value === password.value) {
        errorPasswordConfirm.style.display = "none";
    } else {
        errorPasswordConfirm.style.display = "block";
    }

    console.log(passwordConfirm.value);
}


function lencheck(item, len) {
    if (item.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailCheck(emailAddress) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailAddress);
    return patternMatches;
}

nickName.addEventListener("blur", validateNickname);
birthDay.addEventListener("blur", validateBirthday);
inputEmail.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
passwordConfirm.addEventListener("keyup", validateConfirmPassword);