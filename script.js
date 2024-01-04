function Calculator () {
    this.add = function (a, b) {
        return a + b;
    }
    this.subtract = function (a, b) {
        return a - b;
    }
    this.multiply = function (a, b) {
        return a * b;
    }
    this.divide = function (a, b) {
        if (b === 0) return "The quotient is Infinity.";
        return a / b;
    }
}

function operate (a, op, b) {
    const calculator = new Calculator();
    if (op === "+") {
        return calculator.add(a, b);
    } else if (op === "-") {
        return calculator.subtract(a, b);
    } else if (op === "*") {
        return calculator.multiply(a, b);
    } else if (op === "/") {
        return calculator.divide(a, b);
    }
}

let operand1 = 0;
let operator = "";
let operand2 = 0;
let total = 0;
// when the global variable total has existing value, it will
// store its value to operand 1 when any of the operator is clicked
// call the function to calculate
// if there is total value, move its value to num1 and set the remaining to default
// the clear will set global variables' value to default
function calculate (a, op, b) {
    console.log(a)
    console.log(b)
    if (a && b) {
        total = operate(a, op, b);
    }
}

function storeToOperands (value) {
    if(!operator) {
        return operand1 += value;
    } else {
        return operand2 += value;
    }
}

keys.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "key0":
            text.textContent = storeToOperands(0);
            break;
        case "key1":
            text.textContent = storeToOperands(1);
            break;
        case "key2":
            text.textContent = storeToOperands(2);
            break;
        case "key3":
            text.textContent = storeToOperands(3);
            break;
        case "key4":
            text.textContent = storeToOperands(4);
            break;
        case "key5":
            text.textContent = storeToOperands(5);
            break;
        case "key6":
            text.textContent = storeToOperands(6);
            break;
        case "key7":
            text.textContent = storeToOperands(7);
            break;
        case "key8":
            text.textContent = storeToOperands(8);
            break;
        case "key9":
            text.textContent = storeToOperands(9);
            break;
        case "keyAdd":
            let add = "+";
            text.textContent = add;
            calculate(operand1, add, operand2);
            keyAdd.classList.add("selected");
            keySubtract.classList.remove("selected");
            keyMultiply.classList.remove("selected");
            keyDivide.classList.remove("selected");
            break;
        case "keySubtract":
            let subtract = "-";
            keySubtract.classList.add("selected");
            keyAdd.classList.remove("selected");
            keyMultiply.classList.remove("selected");
            keyDivide.classList.remove("selected");
            // operator = subtract;
            // text.textContent = subtract;
            break;
        case "keyMultiply":
            let multiply = "*";
            keyMultiply.classList.add("selected");
            keyAdd.classList.remove("selected");
            keySubtract.classList.remove("selected");
            keyDivide.classList.remove("selected");
            // operator = multiply;
            // text.textContent = multiply;
            break;
        case "keyDivide":
            let divide = "/";
            keyDivide.classList.add("selected");
            keyAdd.classList.remove("selected");
            keySubtract.classList.remove("selected");
            keyMultiply.classList.remove("selected");
            // operator = divide;
            // text.textContent = divide;
            break;
        case "keyTotal":
            operand1 = "";
            operator = "";
            operand2 = "";
            text.textContent = total;
            keyTotal.classList.add("selected");
            keyAdd.classList.remove("selected");
            keySubtract.classList.remove("selected");
            keyMultiply.classList.remove("selected");
            keyDivide.classList.remove("selected");
            break;
        case "keyClear":
            operand1 = "";
            operator = "";
            operand2 = "";
            text.textContent = "";
            keyAdd.classList.remove("selected");
            keySubtract.classList.remove("selected");
            keyMultiply.classList.remove("selected");
            keyDivide.classList.remove("selected");
            break;
    }
});