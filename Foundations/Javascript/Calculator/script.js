// script.js

// 1. Basic Math Operators
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Snarky Error!" : a / b);

// 2. Variables to store the state
let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "0";

// 3. The Operate Function
function operate(op, a, b) {
    a = Number(a);
    b = Number(b);
    switch (op) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return null;
    }
}

// script.js (Add this below your operate function)

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('button:not(.operator):not(.equals):not(.clear)');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button.textContent);
    });
});

function populateDisplay(number) {
    if (displayValue === "0" || displayValue === 0) {
        displayValue = number;
    } else {
        displayValue += number;
    }
    display.textContent = displayValue;
}

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // If we already have a first number and an operator, 
        // calculate the intermediate result first (the 12 + 7 - 1 rule)
        if (firstNumber !== "" && operator !== "") {
            secondNumber = displayValue;
            let result = operate(operator, firstNumber, secondNumber);
            displayValue = result;
            display.textContent = result;
            firstNumber = result; // The result becomes the new first number
        } else {
            firstNumber = displayValue;
        }

        operator = button.textContent;
        // Flag to reset display on next number click
        displayValue = "0";
    });
});

const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

equalsButton.addEventListener('click', () => {
    if (firstNumber === "" || operator === "") return;

    secondNumber = displayValue;
    let result = operate(operator, firstNumber, secondNumber);

    // Rounding long decimals
    if (typeof result === 'number') {
        result = Math.round(result * 1000) / 1000;
    }

    display.textContent = result;
    displayValue = result; // Allow further operations on result
    firstNumber = "";
    operator = "";
});

clearButton.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "0";
    display.textContent = "0";
});


