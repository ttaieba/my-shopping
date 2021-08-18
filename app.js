function updateParchase(isIncreasing) {
    const caseinput = document.getElementById('case-input');
    let inputtext = caseinput.value;



    if (isIncreasing == true) {
        inputtext = parseInt(inputtext) + 1;
    }

    else if (inputtext > 0) {
        inputtext = parseInt(inputtext) - 1;
    }

    caseinput.value = inputtext;
    const caseTotal = document.getElementById('case-Total');
    caseTotal.innerText = inputtext * 59;
}

// subtotal calcu 

function getinputValue(product) {
    const productInput = document.getElementById(product + '-input')
    const productUp = parseInt(productInput.value);
    return productUp;
}


function calculatTotal() {

    const productAmountPhone = getinputValue('phone') * 1219;
    const productAmountCase = getinputValue('case') * 59;
    const subTotal = productAmountPhone + productAmountCase;
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = grandTotal;


}








// case calculation
document.getElementById('case-plus').addEventListener('click', function () {
    updateParchase(true);
    calculatTotal();

});

document.getElementById('case-minus').addEventListener('click', function () {
    updateParchase(false);
    calculatTotal();

});




// phone calculationdocument.getElementById('phone-plus').addEventListener('click', function () {
function updateParchasePhone(isIncreasing) {
    const phonebuy = document.getElementById('phone-input');
    let inputtextphone = phonebuy.value;



    if (isIncreasing == true) {
        inputtextphone = parseInt(inputtextphone) + 1;
    }

    else if (inputtextphone > 0) {
        inputtextphone = parseInt(inputtextphone) - 1;
    }

    phonebuy.value = inputtextphone;
    const caseTotalPhone = document.getElementById('phone-Total');
    caseTotalPhone.innerText = inputtextphone * 1219;
}



// phone calculation
document.getElementById('phone-plus').addEventListener('click', function () {
    updateParchasePhone(true);
    calculatTotal();

});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateParchasePhone(false);
    calculatTotal();

});

