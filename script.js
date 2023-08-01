
const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".operation");
const point = document.querySelector("#point");
const equals = document.querySelector("#equals");

const del = document.querySelector("#del");
const clear = document.querySelector("#clear");

const prev = document.querySelector("#previous");
const screen = document.querySelector("#screen");

//

point.addEventListener("click", inputPoint);
equals.addEventListener("click", solve);
del.addEventListener("click", backspace);
clear.addEventListener("click", clearScreen);

//

let operand1 = "";
let operand2 = "";
let op = "";

//

digits.forEach(function(digit) {
    digit.addEventListener("click", function() {
        inputDigit(digit.textContent);
    })
});

operations.forEach(function(op) {
    op.addEventListener("click", function() {
        inputOperation(op.textContent);
    })
});

function round(number) {
    return Math.round(number * 100) / 100;
}

function inputDigit(digit) {
    screen.textContent += digit;
}

function inputPoint() {
    if (!screen.textContent.includes(".")) {
        if (screen.textContent === "") {
            screen.textContent = "0";
        }
        screen.textContent += ".";
    }
}

function inputOperation(operation) {
    operand1 = screen.textContent;
    op = operation;
    prev.textContent = `${operand1} ${op}`;
    screen.textContent = "";
}

function solve() {
    operand2 = screen.textContent;
    screen.textContent = operate(op, operand1, operand2);
    prev.textContent = `${operand1} ${op} ${operand2}`;
}

function backspace() {
    screen.textContent = screen.textContent.slice(0, -1);
}

function clearScreen() {
    operand1 = "";
    operand2 = "";
    op = "";
    prev.textContent = "";
    screen.textContent = "";
}

function add(x, y) {
    let result = round(x + y);
    return result;
}

function subtract(x, y) {
    let result = round(x - y);
    return result;
}

function multiply(x, y) {
    let result = round(x * y);
    return result;
}

function divide(x, y) {
    if (y == 0) {
        return "Error!";
    }
    let result = round(x / y);
    return result;
}

function operate(operation, x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    
    if (operation === "+") {
        return add(x, y);
    } else if (operation === "-") {
        return subtract(x, y);
    } else if (operation === "*") {
        return multiply(x, y);
    } else if (operation === "÷") {
        return divide(x, y);
    } else {
        return "Error!";
    }
}
