const display = document.querySelector('#display')
const digits = document.querySelectorAll('.digit')
const clear = document.querySelector('#clear')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')
let operatorChosen = false
let operationSign = null
let operation = null
let firstEle = null
let secondEle = null
let input = false
let result = null
let operated = false


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

    operatorChosen = false
    operationSign = null
    operation = null
    firstEle = null
    secondEle = null
    input = false
    result = null
    operated = false
    display.textContent = String.fromCharCode(160)
    subdisplay.textContent = String.fromCharCode(160)

}

function changeDisplay(textContent) {
    display.textContent += textContent
}

function getOperator(operator) {
    switch (operator) {
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

function determineDecimal(number) {
    
}

digits.forEach(digit => {

    digit.addEventListener('click', function() {
        changeDisplay(digit.textContent)
        input = true
        if (!operatorChosen) {
            firstEle = +display.textContent
        } else {
            secondEle = +display.textContent
        }
    })
})

operators.forEach(operator => {

    operator.addEventListener('click', function() {
        if (input) {
            if (operationSign && !operated) {
                firstEle = operate(operation, firstEle, secondEle)
            } else if (operated) {
                firstEle = +display.textContent
                operated = false
            }
            getOperator(operator.textContent)
            subdisplay.textContent = firstEle + ` ${operationSign} `
            
            operatorChosen = true
            input = false
        } else if (firstEle) {
            getOperator(operator.textContent)
            subdisplay.textContent = firstEle + ` ${operationSign} `
        }
        display.textContent = String.fromCharCode(160)
    })

})

equals.addEventListener('click', function() {
    if (!input) {
        secondEle = firstEle
        input = true
    }

    if (firstEle != null && secondEle != null) {
        result = operate(operation, firstEle, secondEle)
        display.textContent = result
        subdisplay.textContent = +firstEle + ` ${operationSign} ` + +secondEle + ' ='
        firstEle = result
        operated = true
    }

    

})



clear.addEventListener('click', clearContent)