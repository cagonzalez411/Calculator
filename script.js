const display = document.querySelector('#display')
const subdisplay = document.querySelector('#subdisplay')
const digits = document.querySelectorAll('.digit')
const clear = document.querySelector('#clear')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')

function add(a,b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) {
        alert('Error: Dividing by zero')
        return null
    }
    return a / b
}

function operate(operator, a, b) {
    return operator(a, b)
}

function changeDisplay(number) {
    if (+display.textContent == 0 || Number.isNaN(+display.textContent)) {
        display.textContent = number
    } else {
        display.textContent += number
    }
}

digits.forEach(digit => {
    digit.addEventListener('click', function () {
        changeDisplay(digit.textContent)
    })
})




