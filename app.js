(function(){
    const container = document.querySelector(".container");

    const item = document.createElement("div");
    item.setAttribute("class", "item");
    
    const keys = document.createElement("div");
    keys.setAttribute("class", "keys");

    const display = document.createElement("div");
    display.setAttribute("class", "display");
    
    const text = document.createElement("p");
    text.textContent = "";
    
    const key1 = document.createElement("button");
    const key2 = document.createElement("button");
    const key3 = document.createElement("button");
    const key4 = document.createElement("button");
    const key5 = document.createElement("button");
    const key6 = document.createElement("button");
    const key7 = document.createElement("button");
    const key8 = document.createElement("button");
    const key9 = document.createElement("button");
    const key0 = document.createElement("button");

    const keyAdd = document.createElement("button");
    const keySubtract = document.createElement("button");
    const keyMultiply = document.createElement("button");
    const keyDivide =  document.createElement("button");
    const keyTotal =  document.createElement("button");
    const keyClear =  document.createElement("button");
    const keyDot =  document.createElement("button");
    const keyBack =  document.createElement("button");

    key1.setAttribute("id", "key1");
    key2.setAttribute("id", "key2");
    key3.setAttribute("id", "key3");
    key4.setAttribute("id", "key4");
    key5.setAttribute("id", "key5");
    key6.setAttribute("id", "key6");
    key7.setAttribute("id", "key7");
    key8.setAttribute("id", "key8");
    key9.setAttribute("id", "key9");
    key0.setAttribute("id", "key0");

    keyAdd.setAttribute("id", "keyAdd");
    keySubtract.setAttribute("id", "keySubtract");
    keyMultiply.setAttribute("id", "keyMultiply");
    keyDivide.setAttribute("id", "keyDivide");
    keyTotal.setAttribute("id", "keyTotal");
    keyClear.setAttribute("id", "keyClear");
    keyDot.setAttribute("id", "keyDot");
    keyBack.setAttribute("id", "keyBack");
    
    key0.textContent = 0;
    key1.textContent = 1;
    key2.textContent = 2;
    key3.textContent = 3;
    key4.textContent = 4;
    key5.textContent = 5;
    key6.textContent = 6;
    key7.textContent = 7;
    key8.textContent = 8;
    key9.textContent = 9;

    keyAdd.textContent = "+";
    keySubtract.textContent = "-";
    keyMultiply.textContent = "×";
    keyDivide.textContent = "/";
    keyTotal.textContent = "=";
    keyClear.textContent = "AC";
    keyDot.textContent = ".";
    keyBack.textContent = "DEL";

    keyAdd.classList.add("separator");
    keySubtract.classList.add("separator");
    keyMultiply.classList.add("separator");
    keyDivide.classList.add("separator");
    keyTotal.classList.add("total");
    keyDot.classList.add("total");
    keyClear.classList.add("remove");
    keyBack.classList.add("remove");

    keys.append(key1, key2, key3, key4, key5, key6, key7, key8, key9, key0,
        keyAdd, keySubtract, keyDivide, keyMultiply, keyClear, keyTotal, keyDot, keyBack);
    item.appendChild(display);
    item.appendChild(keys);
    display.appendChild(text);
    container.appendChild(item);

    let operand1 = "";
    let operator = "";
    let operand2 = "";
    let total = 0;

    function Calculator () {
        this.add = function (a, b) {
            return +(a + b).toFixed(2);
        }
        this.subtract = function (a, b) {
            return +(a - b).toFixed(2);
        }
        this.multiply = function (a, b) {
            return +(a * b).toFixed(2);
        }
        this.divide = function (a, b) {
            if (b === 0) return "The quotient is Infinity.";
            return +(a / b).toFixed(2);
        }
    }

    function operate (a, op, b) {
        aNum = Number(a);
        bNum = Number(b);
        const calculator = new Calculator();
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

    function storeToOperands (value) {
        if(!operator) {
            return operand1 += value;
        } else {
            return operand2 += value;
        }
    }

    function removeFromOperands () {
        if(!operator) {
            return operand1 = operand1.slice(0, -1);
        } else {
            return operand2 = operand2.slice(0, -1);
        }
    }

    function clearTheRest () {
        operator = "";
        operand2 = "";
    }

    function clearAllValues () {
        operand1 = "";
        operator = "";
        operand2 = "";
        total = 0;
    }

    function changeBgColor (key) {
        let className = "selected";
        switch (key) {
            case "keyAdd":
                keyAdd.classList.add(className);
                keySubtract.classList.remove(className);
                keyMultiply.classList.remove(className);
                keyDivide.classList.remove(className);
                break;
            case "keySubtract":
                keySubtract.classList.add("selected");
                keyAdd.classList.remove("selected");
                keyMultiply.classList.remove("selected");
                keyDivide.classList.remove("selected");
                break;
            case "keyMultiply":
                keyMultiply.classList.add("selected");
                keyAdd.classList.remove("selected");
                keySubtract.classList.remove("selected");
                keyDivide.classList.remove("selected");
                break;
            case "keyDivide":
                keyDivide.classList.add("selected");
                keyAdd.classList.remove("selected");
                keySubtract.classList.remove("selected");
                keyMultiply.classList.remove("selected");
                break;
            default:
                keyAdd.classList.remove("selected");
                keySubtract.classList.remove("selected");
                keyMultiply.classList.remove("selected");
                keyDivide.classList.remove("selected");
                break;
        }
    }

    function calculate () {
        if (operator && operand2) {
            total = operate(operand1, operator, operand2);
            operand1 = total;
            clearTheRest();
        }
    }

    keys.addEventListener("click", (event) => {

        let target = event.target;
        let add = "+";
        let subtract = "-";
        let multiply = "*";
        let divide = "/";

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
                calculate();
                operator = add;
                changeBgColor("keyAdd");
                break;
            case "keySubtract":
                calculate();
                operator = subtract;
                changeBgColor("keySubtract");
                break;
            case "keyMultiply":
                calculate();
                operator = multiply;
                changeBgColor("keyMultiply");
                break;
            case "keyDivide":
                calculate();
                operator = divide;
                changeBgColor("keyDivide");
                break;
            case "keyTotal":
                total = operate(operand1, operator, operand2);
                text.textContent = total;
                operand1 = total;
                clearTheRest();
                changeBgColor("keyTotal");
                break;
            case "keyClear":
                clearAllValues();
                text.textContent = "";
                changeBgColor("keyClear");
                break;
            case "keyBack":
                text.textContent = removeFromOperands();
                changeBgColor("keyBack");
            break;
            case "keyDot":
                text.textContent = storeToOperands(".");
                changeBgColor("keyBack");
            break;
        };
    });

    document.addEventListener("keydown", (event) => {

        let target = event.key;
        let add = "+";
        let subtract = "-";
        let multiply = "*";
        let divide = "/";

        switch (target) {
            case "0":
                text.textContent = storeToOperands("0");
                break;
            case "1":
                text.textContent = storeToOperands("1");
                break;
            case "2":
                text.textContent = storeToOperands("2");
                break;
            case "3":
                text.textContent = storeToOperands("3");
                break;
            case "4":
                text.textContent = storeToOperands("4");
                break;
            case "5":
                text.textContent = storeToOperands("5");
                break;
            case "6":
                text.textContent = storeToOperands("6");
                break;
            case "7":
                text.textContent = storeToOperands("7");
                break;
            case "8":
                text.textContent = storeToOperands("8");
                break;
            case "9":
                text.textContent = storeToOperands("9");
                break;
            case "+":
                calculate();
                operator = add;
                changeBgColor("keyAdd");
                break;
            case "-":
                calculate();
                operator = subtract;
                changeBgColor("keySubtract");
                break;
            case "*":
                calculate();
                operator = multiply;
                changeBgColor("keyMultiply");
                break;
            case "x":
                calculate();
                operator = multiply;
                changeBgColor("keyMultiply");
                break;
            case "/":
                calculate();
                operator = divide;
                changeBgColor("keyDivide");
                break;
            case "Enter":
                total = operate(operand1, operator, operand2);
                text.textContent = total;
                operand1 = total;
                clearTheRest();
                changeBgColor("keyTotal");
                break;
            case "Backspace":
                text.textContent = removeFromOperands();
                changeBgColor("keyBack");
            break;
            case ".":
                text.textContent = storeToOperands(".");
                changeBgColor("keyBack");
            break;
        }
    });
})();