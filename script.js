const display = document.querySelector('#display')
const subdisplay = document.querySelector('#subdisplay')
const digits = document.querySelectorAll('.digit')
const clear = document.querySelector('#clear')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')
let firstEle = null
let secondEle = null
let wasOperationChosen = null 
let operatorChosen = null
let operateResult = null
let evaluated = false
let dividebyZero = false


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
        dividebyZero = true
    }
    return a / b
}

function operate(operator, a, b) {
    return operator(a, b)
}

function chooseOperation(operator) {
    switch (operator) {
        case '/':
            operatorChosen = divide
            break
        case 'x':
            operatorChosen = multiply
            break
        case '+':
            operatorChosen = add
            break
        case '-':
            operatorChosen = subtract
            break
    }
    display.textContent = 0
}

function clearFunction() {
    firstEle = null
    secondEle = null
    wasOperationChosen = null 
    operatorChosen = null
    display.textContent = 0
    subdisplay.textContent = String.fromCharCode(160)

}

function changeDisplay(number) {
    if (+display.textContent == 0 || Number.isNaN(+display.textContent)) {
        display.textContent = number
    } else {
        display.textContent += number
    }
    if (!wasOperationChosen) {
        firstEle = +display.textContent
    } else {
        secondEle = +display.textContent
    }
}

digits.forEach(digit => {
    digit.addEventListener('click', function () {
        changeDisplay(digit.textContent)
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        
        if (wasOperationChosen) {
            operateResult = operate(operatorChosen, firstEle, secondEle)
            firstEle = operateResult
            subdisplay.textContent = firstEle
        } else {
            subdisplay.textContent = firstEle
        }
        wasOperationChosen = true
        chooseOperation(operator.textContent)
        
    })
})

equals.addEventListener('click', function() {
    if (!dividebyZero) {
        operateResult = operate(operatorChosen, firstEle, secondEle)
        display.textContent = operateResult
        evaluated = true
    }
})

clear.addEventListener('click', () => {
    clearFunction()
})



