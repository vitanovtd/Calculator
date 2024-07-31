let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

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

function backSpace(numberStr) {
  return numberStr.slice(0, -1);
}

function operate(operator, a, b = null) {
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
    case "√":
      return squareRoot(a);
    case "1/x":
      return reciprocal(a);
    default:
      return null;
  }
}

// console.log(add(3, 5));
// console.log(subtract(10, 4));
// console.log(multiply(7, 6));
// console.log(divide(8, 2));
// console.log(divide(8, 0));
