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

let operand1 = 0;
let operator = "";
let operand2 = 0;
let total = 0;

function operate (num1, operator, num2) {
    const calculator = new Calculator();
    // as long as num1 and num2 is not empty, do the operation
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

// this wont make sense when user clicked different operands
// it will replace the operator
// so when clicking total, it will output the value from operand1—that
// comes before when the user clicked an operator–and operand2–when the global
// variable operator is not empty–out of the global operator's recent clicked operator
// this case will not work on several operations like the 12 + 7 - 5 * 3 = 42

// when the global variable total has existing value, it will
// store its value to operand 1 when any of the operator is clicked

function storeToOperands (value) {
    if(!operator) {
        return operand1 += value;
    } else {
        return operand2 += value;
    }
}

function clearValues () {
    return {
        "operand1": 0,
        "operator": "",
        "operand2": 0
    };
}

keys.addEventListener("click", (event) => {
    let clear = clearValues();
    let target = event.target;

    switch (target.id) {
        case "key0":
            storeToOperands(0)
            text.textContent = 0;
            break;
        case "key1":
            storeToOperands(1)
            text.textContent = 1;
            break;
        case "key2":
            storeToOperands(2)
            text.textContent = 2;
            break;
        case "key3":
            storeToOperands(3)
            text.textContent = 3;
            break;
        case "key4":
            storeToOperands(4)
            text.textContent = 4;
            break;
        case "key5":
            storeToOperands(5)
            text.textContent = 5;
            break;
        case "key6":
            storeToOperands(6)
            text.textContent = 6;
            break;
        case "key7":
            storeToOperands(7)
            text.textContent = 7;
            break;
        case "key8":
            storeToOperands(8)
            text.textContent = 8;
            break;
        case "key9":
            storeToOperands(9)
            text.textContent = 9;
            break;
        case "keyAdd":
            // do calculate probably checking for both operands value not empty
            let add = "+";
            operate(operand1, add, operand2)
            text.textContent = "+";
            break;
        case "keySubtract":
            let subtract = "-";
            operate(operand1, subtract, operand2)
            text.textContent = "-";
            break;
        case "keyMultiply":
            let multiply = "*";
            operate(operand1, multiply, operand2)
            text.textContent = "×";
            break;
        case "keyDivide":
            let divide = "/";
            operate(operand1, divide, operand2)
            text.textContent = "/";
            break;
        case "keyTotal":
            operand1 = clear.operand1;
            operator = clear.operator;
            operand2 = clear.operand2;
            // text.textContent = 0; // total calculation
            break;
        case "keyClear":
            operand1 = clear.operand1;
            operator = clear.operator;
            operand2 = clear.operand2;
            text.textContent = 0;
            break;
    }
});

// add event delegation here with the id.keys
// when a specific id is clicked it,
// will store a value to the global variables
// will set the value in the display text with it also
// if the operator is empty all of the clicked numbers will be added += to num1
// else it will go to num2
// call the function to calculate
// if there is total value, move its value to num1 and set the remaining to default
// the clear will set global variables' value to default