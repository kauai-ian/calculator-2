// create variables for numbers and operator

let firstArg = "";
let secondArg = "";

// a placeholder that store the operator
let currentOperation = null;

// reset the display screen
let shouldResetScreen = false;

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
});
operatorBtn.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

// create a function to remember the last number inputted
function appendNumber(number) {
  if (currentOperationScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

// create a clear function to delete all displayed units by setting an empty string if the values on the output are removed.
function clearScreen() {
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
  firstArg = "";
  secondArg = "";
  currentOperation = null;
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

// create a delete function to delete the last number inputted if there is a previous input
function del() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
}

// create a function to append a decimal point
function appendPoint() {
  if (shouldResetScreen) resetScreen();
  if (currentOperationScreen.textContent == null) {
    currentOperationScreen.textContent = "0.";
  } else currentOperationScreen.textContent += ".";
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
  lastOperationScreen.textContent = `${firstArg} ${currentOperation}`;
  shouldResetScreen = true;
}

//a function that takes the second number and sets it equal to the current display content.
// sets the current display content equal to the function operate with the 3 string parameters.
// sets the previous display content equal to the live code of the 3 inputs.
// wont accept empty values.
function evaluate() {
  if (currentOperation === null || shouldResetScreen);
  secondArg = currentOperationScreen.textContent;
  currentOperationScreen.textContent = operate(
    firstArg,
    currentOperation,
    secondArg
  );
  lastOperationScreen.textContent = `${firstArg} ${currentOperation} ${secondArg} =`;
  currentOperation = null;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  console.log(a, operator, b);
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "x") {
    return a * b;
  } else if (operator === "÷") {
    if (b === 0) return null;
    return a / b;
  }
}
