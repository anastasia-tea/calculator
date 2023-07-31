
const digits = document.querySelectorAll(".digit");
const operations = document.querySelectorAll(".operations");
const point = document.querySelector("#point");
const equals = document.querySelector("#equals");

const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const screen = document.querySelector("#screen");

//

clear.addEventListener("click", clearScreen);

//

let firstOperand = "";
let secondOperand = "";
let current = "";

digits.forEach(function(digit) {
    digit.addEventListener("click", function() {
        inputDigit(digit.textContent);
    })
});

function round(number) {
    let result = number.toFixed(4);
    return result;
}

function inputDigit(digit) {
    screen.textContent += digit;
}

function clearScreen() {
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

function operate() {

}
