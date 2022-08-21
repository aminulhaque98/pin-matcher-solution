function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('gety not 4 digit', pin)
        return getPin();
    }

};


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    // console.log(random)
    return random;

};


document.getElementById('btn-generet-pin').addEventListener('click', function () {
    const pin = getPin();
    const inputFieldDisplay = document.getElementById('display-pin');
    // console.log(inputFieldDisplay)
    inputFieldDisplay.value = pin;
});






document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed - numbers');
    const priviousTypedNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = priviousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {


        const newTypedNumber = priviousTypedNumber + number;
        // console.log(newTypedNumber)
        typeNumberField.value = newTypedNumber;
    }

})


document.getElementById('varify-pin').addEventListener('click', function () {

    const inputFieldDisplay = document.getElementById('display-pin');
    const currentPin = inputFieldDisplay.value;


    const typeNumberField = document.getElementById('typed - numbers');
    const priviousTypedNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailurMessenge = document.getElementById('pin-failure');

    if (currentPin === priviousTypedNumber) {

        pinSuccessMessage.style.display = "block"
        pinFailurMessenge.style.display = 'none'
    }
    else {

        pinFailurMessenge.style.display = 'block'
        pinSuccessMessage.style.display = "none"
    }


})

// mcq quesion
// Math.pow(4, 0.5) + "spiderman" + "987" + Math.sqrt(9)

// '2spiderman9873'


// return Math.floor(Math.random()*90000) + 10000;
// get-5digits