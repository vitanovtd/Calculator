let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.querySelector("#display");

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
  if (b === 0) {
    return "Error: division by zero";
  }
  return a / b;
}

function percentage(a) {
  return a / 100;
}

function square(a) {
  return a * a;
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function reciprocal(a) {
  if (a === 0) {
    return "error: division by zero";
  }
  return 1 / a;
}

function plusMinus(a) {
  return -a;
}

function backspace(numberStr) {
  return numberStr.slice(0, -1) || "0";
}

function operate(operator, a, b = null) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return percentage(a);
    case "x²":
      return square(a);
    case "2√x":
      return squareRoot(a);
    case "1/x":
      return reciprocal(a);
    case "±":
      return plusMinus(a);
    default:
      return null;
  }
}

function updateDisplay(number) {
  if (shouldResetDisplay) {
    resetDisplay();
  }

  if (display.textContent === "0" || shouldResetDisplay) {
    display.textContent = number;
    shouldResetDisplay = false;
  } else {
    display.textContent += number;
  }
}

function resetDisplay() {
  display.textContent = "";
  shouldResetDisplay = false;
}

function clearCalculator() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
  shouldResetDisplay = false;
}

function handleBackspace() {
  display.textContent = backspace(display.textContent);
}

function handleOperator(operator) {
  if (currentOperator !== null) {
    secondNumber = display.textContent;
    displayResult();
  }

  firstNumber = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function displayResult() {
  if (currentOperator === null || shouldResetDisplay) {
    return;
  }
  secondNumber = display.textContent;
  const result = operate(currentOperator, firstNumber, secondNumber);
  display.textContent = result;
  firstNumber = result;
  currentOperator = null;
  shouldResetDisplay = true;
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const { id } = button;

    // Handle numeric buttons
    if (
      id === "zero" ||
      id === "one" ||
      id === "two" ||
      id === "three" ||
      id === "four" ||
      id === "five" ||
      id === "six" ||
      id === "seven" ||
      id === "eight" ||
      id === "nine"
    ) {
      updateDisplay(button.textContent);
    }
    // Handle clear and backspace buttons
    else if (id === "clear") {
      clearCalculator();
    } else if (id === "backspace") {
      handleBackspace();
    }
    // Handle equals button
    else if (id === "equals") {
      displayResult();
    }
    // Handle decimal point
    else if (id === "decimal") {
      if (!display.textContent.includes(".")) {
        updateDisplay(".");
      }
    }
    // Handle plus-minus button
    else if (id === "plus-minus") {
      display.textContent = operate("±", display.textContent);
    }
    // Handle other operators
    else {
      handleOperator(button.textContent);
    }
  });
});

clearCalculator();
