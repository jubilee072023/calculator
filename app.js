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
    keyMultiply.textContent = "*";
    keyDivide.textContent = "/";
    keyTotal.textContent = "=";
    keyClear.textContent = "AC";

    keyClear.classList.add("remove");
    keyTotal.classList.add("total");
    keyAdd.classList.add("separator");
    keySubtract.classList.add("separator");
    keyMultiply.classList.add("separator");
    keyDivide.classList.add("separator");

    keys.append(key1, key2, key3, key4, key5, key6, key7, key8, key9, key0,
        keyAdd, keySubtract,keyClear, keyTotal, keyMultiply, keyDivide);
    item.appendChild(keys);
    item.appendChild(display);
    display.appendChild(text);
    container.appendChild(item);

    let operand1 = "";
    let operator = "";
    let operand2 = "";
    
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
        aNum = parseInt(a);
        bNum = parseInt(b);
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
                let add = "+";
                operator = add;
                if (operand2) {
                    operate(operand1, add, operand2);
                }
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
})()