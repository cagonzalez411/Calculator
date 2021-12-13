const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const clear = document.querySelector('#clear');
let currentDisplay = display.textContent;
let operatation 

function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function clearContent() {
    display.textContent = 0;
}

function changeDisplay(textContent) {
    if (display.textContent === '0') {
        display.textContent = textContent;
        currentDisplay = +display.textContent;
    } else {
        display.textContent += textContent;
        currentDisplay = +display.textContent;
    }
}



digits.forEach(e => {
    e.addEventListener('click', function() {
        changeDisplay(e.textContent);
    })
})

clear.addEventListener('click', clearContent);