let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result");


elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;



    switch (inputValue) {
        case "1" :
            elResult.textContent = "Dushanba";
            break;
        case "2" :
            elResult.textContent = "Seshanba";
            break;
        case "3" :
            elResult.textContent = "Chorshanba";
            break;
        case "4" :
            elResult.textContent = "Payshanba";
            break;
        case "5" :
            elResult.textContent = "Juma";
            break;
        case "6" :
            elResult.textContent = "Shanba";
            break;
        case "7" :
            elResult.textContent = "Yakshanba";
            break;
        default :
            elResult.textContent = "1 dan 7 gacha raqam kiriting";
            break;
    }

})