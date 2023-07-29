// create variables for numbers and operator, a placeholder that store the operator
let firstArg = "";
let secondArg = "";
let currentOperation = null;

// reset the display screen
let shouldResetScreen = false;

// create the current display and a total display
const total = document.getElementById("total");
const current = document.getElementById("current");

// create a function to remember the last number inputted
function appendNumber() {
  current.value += firstArg;
  total.value += secondArg;
}

// create a clear function to delete all displayed units by setting an empty string if the values on the output are removed.
function clearScreen() {
  firstArg = "";
  secondArg = "";
  currentOperation = null;
}

function resetScreen() {
  firstArg = "";
  shouldResetScreen = false;
}

// create a delete function to delete the last number inputted if there is a previous input
function del() {
  firstArg = firstArg.slice(0, -1);
}

// create a function to append a decimal point
function appendPoint() {
  if (shouldResetScreen) resetScreen();
  if (firstArg == null) {
    firstArg = "0.";
  } else firstArg += ".";
}

// create a function that will take the current text display and input an operator between it.  if the number is not input then cannot set an operator, so return.
function operation(operator) {
  if (currentOperation !== null) return;
  firstArg = secondArg;
  secondArg = "";
  currentOperation = operator;
}

//a function that takes the second number and sets it equal to the current display content. Sets the current display content equal to the function operate with the 3 string parameters. Sets the previous display content equal to the live code of the 3 inputs. wont accept empty values.
function evaluate() {
  if (currentOperation === null || shouldResetScreen);
  if (firstArg) {
    operation();
  }
  secondArg = `${currentOperation(+firstArg, +secondArg)}`;
  firstArg = "";
  currentOperation = null;
}

function btnClick(evt) {
  const btn = evt.target.dataset.btn;
  if (!btn) return;

  switch (btn) {
    case "+":
      return operation(a + b);
    case "-":
      return operation(a - b);
    case "x":
      return operation(a * b);
    case "÷":
      if (b === 0) return null;
      return operation(a / b);
    case "=":
      return operation;
    case "del":
      return del;
    case "clear":
      return clearScreen;
    case ".":
      return appendPoint;
    default:
      secondArg += btn;
      return null;
  }
  appendNumber();
}

// event listener click on any button calls the functions in the calculator
document
  .getElementsByClassName("btn")
  .forEach((btn) => btn.addEventListener("click", woof()));

function woof() {
  console.log("woof");
}
