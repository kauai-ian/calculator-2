// create variables for numbers and operator

let firstArg = "";
let secondArg = "";
let operator = null;

// a placeholder that store the operator
let currentOperation = null;

// html buttons are made to be variables and attach a query selector
const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const pointBtn = document.getElementById("pointBtn");
const equalsBtn = document.getElementById("equalsBtn");
const deleteBtn = document.getElementById("deleteBtn");
const clearBtn = document.getElementById("clearBtn");
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);

// event listener click calls the functions in the calculator
clearBtn.addEventListener("click", clearScreen);
deleteBtn.addEventListener("click", del);
pointBtn.addEventListener("click", appendPoint);
equalsBtn.addEventListener("click", evaluate);
numberBtn.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
}); /* for all buttons with number, adds the click to run appendNumber using the text of the button */
operatorBtn.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
}); /* for all buttons with operator, adds the click to run setOperation using the text of the button */

// create a clear function to delete all displayed units by setting an empty string if the values on the output are removed.
function clearScreen() {
  currentOperationScreen.textContent = "0";
  lastOperationsScreen.textContent = "";
  firstArg = "";
  secondArg = "";
  currentOperation = null;
}

// create a delete function to delete the last number inputted if there is a previous input
function del() {
  // might have to use internal function of JS like slice?
}

// create a function to append a decimal point
function appendPoint() {
  if (currentOperationScreen.textContent == null) {
    currentOperationScreen.textContent = "0.";
  } else currentOperationScreen.textContent += ".";
}

// create a function to remembe the last number inputted
function appendNumber(number) {
  currentOperationScreen.textContent += number;
}

// create a function to update the display.
function updateDisplay(buttonContent) {
  currentOperationScreen.textContent = buttonContent;
}

// if the number is not input then cannot set an operator, so return.
// create a function that will take the current text display and input an operator between it
function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstArg = currentOperationScreen.textContent;
  currentOperation = operator;
  lastOperationsScreen = `${firstArg} ${operator}`;
}

//a function that takes the second number and sets it equal to the current display content.
// sets the current display content equal to the function operate with the 3 string parameters.
// sets the previous display content equal to the live code of the 3 inputs.
function evaluate() {
  secondArg = currentOperationScreen.textContent;
  currentOperationScreen.textContent = operate(
    firstArg,
    currentOperation,
    secondArg
  );
  lastOperationsScreen.textContent = `${firstArg} ${currentOperation} ${secondArg} =`;
}
function add(a, b) {
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

function operate(a, operator, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "÷") {
    return divide(a, b);
  }
}
