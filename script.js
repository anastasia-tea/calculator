
const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".operation");
const point = document.querySelector("#point");
const equals = document.querySelector("#equals");

const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const screen = document.querySelector("#screen");

//

point.addEventListener("click", inputPoint);
equals.addEventListener("click", display);
//del.addEventListener("click");
clear.addEventListener("click", clearScreen);

//

let operand1 = "";
let operand2 = "";
let operation = "";

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
    let result = number.toFixed(4);
    return result;
}

function inputDigit(digit) {
    screen.textContent += digit;
}

function inputOperation(op) {
    if (operation === "") {
        operation = op;
        screen.textContent += op;
    }
}

function inputPoint() {
    if (!screen.textContent.includes(".")) {
        if (screen.textContent === "") {
            screen.textContent = "0";
        }
        screen.textContent += ".";
    }
}

function backspace() {

}

function clearScreen() {
    screen.textContent = "";
    operand1 = "";
    operand2 = "";
    operation = "";
}

//

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

function operate(op, x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    
    if (op === "+") {
        return add(x, y);
    } else if (op === "-") {
        return subtract(x, y);
    } else if (op === "*") {
        return multiply(x, y);
    } else if (op === "÷") {
        return divide(x, y);
    } else {
        return "Error!";
    }
}

function display() {

}
