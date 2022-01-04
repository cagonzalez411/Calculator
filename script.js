const display = document.querySelector('#display')
const digits = document.querySelectorAll('.digit')
const clear = document.querySelector('#clear')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')
let currentDisplay = display.textContent
let operation = null
let operationSign = null
let firstEle = null
let secondEle = null
let input = false

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
        return
    }
    return a / b
}

function operate(operator, a, b) {
    if (operation) {
        return operator(a, b)
    }
}

function clearContent() {
    display.textContent = 0
    subdisplay.textContent = '\xa0'
    operation = ''
    operationSign = ''
    firstEle = 0
    secondEle = 0
    input = false
}

function changeDisplay(textContent) {
    if (display.textContent === '0') {
        display.textContent = textContent
        currentDisplay = +display.textContent
    } else {
        display.textContent += textContent
        currentDisplay = +display.textContent
    }
}

function getOperator(operatorChosen) {
    switch (operatorChosen) {
        case '/':
            operation = divide
            operationSign = '/'
            break
        case 'x':
            operation = multiply
            operationSign = 'x'
            break
        case '-':
            operation = subtract
            operationSign = '-'
            break
        case '+':
            operation = add
            operationSign = '+'
            break
    }
}

digits.forEach(e => {
    e.addEventListener('click', function() {
        changeDisplay(e.textContent)
        input = true
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        getOperator(operator.textContent)
        firstEle = +display.textContent
        subdisplay.textContent = +firstEle + ` ${operationSign} `
        display.textContent = 0
    })
})

equals.addEventListener('click', function() {
    if (!input || !operation) return
    let result = operate(operation, +firstEle, +display.textContent)
    if (typeof(result) == 'number') {
        let secondEle = display.textContent
        let resultRounded = Math.round(result * 10000)/10000
        display.textContent = resultRounded
        subdisplay.textContent = +firstEle + ` ${operationSign} ` + +secondEle 
    }
    
})



clear.addEventListener('click', clearContent)