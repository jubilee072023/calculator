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

let operand1 = "";
let operator = "";
let operand2 = "";
let total = "";

function operate (a, op, b) {
    const calculator = new Calculator();
    aNum = Number(a);
    bNum = Number(b);
    if (op === "+") {
        return calculator.add(aNum, bNum);
    } else if (op === "-") {
        return calculator.subtract(aNum, bNum);
    } else if (op === "*") {
        return calculator.multiply(aNum, bNum);
    } else if (op === "/") {
        return calculator.divide(aNum, bNum);
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

keys.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "key0":
            text.textContent = storeToOperands("0");
            break;
        case "key1":
            text.textContent = storeToOperands("1");
            break;
        case "key2":
            text.textContent = storeToOperands("2");
            break;
        case "key3":
            text.textContent = storeToOperands("3");
            break;
        case "key4":
            text.textContent = storeToOperands("4");
            break;
        case "key5":
            text.textContent = storeToOperands("5");
            break;
        case "key6":
            text.textContent = storeToOperands("6");
            break;
        case "key7":
            text.textContent = storeToOperands("7");
            break;
        case "key8":
            text.textContent = storeToOperands("8");
            break;
        case "key9":
            text.textContent = storeToOperands("9");
            break;
        case "keyAdd":
            // do calculate probably checking for both operands value not empty ?
            let add = "+";
            text.textContent = add;
            operate(operand1, add, operand2)
            break;
        case "keySubtract":
            let subtract = "-";
            text.textContent = subtract;
            break;
        case "keyMultiply":
            let multiply = "*";
            text.textContent = multiply;
            break;
        case "keyDivide":
            let divide = "/";
            text.textContent = divide;
            break;
        case "keyTotal":
            operand1 = "";
            operator = "";
            operand2 = "";
            // text.textContent = ; // total calculation
            break;
        case "keyClear":
            operand1 = "";
            operator = "";
            operand2 = "";
            text.textContent = "";
            break;
    }
});

// add event delegation here with the id.keys
// when a specific id is clicked it,
// will store a value to the global variables
// will set the value in the display text with it also
// if the operator is empty all of the clicked numbers will be added += to a (operator1)
// else it will go to b (operator2)
// call the function to calculate
// if there is total value, move its value to num1 and set the remaining to default
// the clear will set global variables' value to default