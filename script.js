function Calculator () {
    this.add = function (num1, num2) {
        return num1 + num2;
    }
    this.subtract = function (num1, num2) {
        return num1 - num2;
    }
    this.multiply = function (num1, num2) {
        return num1 * num2;
    }
    this.divide = function (num1, num2) {
        if (num2 === 0) return "The quotient is Infinity.";
        return num1 / num2;
    }
}

let num1 = 0;
let operator = "";
let num2 = 0;

function operate (num1, operator, num2) {
    const calculator = new Calculator();
    if (operator === "+") {
        return calculator.add(num1, num2);
    } else if (operator === "-") {
        return calculator.subtract(num1, num2);
    } else if (operator === "*") {
        return calculator.multiply(num1, num2);
    } else if (operator === "/") {
        return calculator.divide(num1, num2);
    }
}