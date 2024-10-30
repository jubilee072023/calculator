(function(){

    /**
     * 
     * HTML DOM
     * 
     */


    /**
     * 
     * Container
     * 
     */

    const container = document.querySelector(".container");

    /**
     * 
     * Item
     * 
     */

    const item = document.createElement("div");
    item.setAttribute("class", "item");
    
    /**
     * 
     * Item's display
     * 
     */

    const display = document.createElement("div");
    display.setAttribute("class", "display");

    /**
     * 
     * Display's text
     * 
     */

    const text = document.createElement("p");
    text.textContent = "";

    /**
     * 
     * Item's keys
     * 
     */

    const keys = document.createElement("div");
    keys.setAttribute("class", "keys");

    /**
     * 
     * Key 1
     * 
     */

    const key1 = document.createElement("button");
    key1.setAttribute("id", "key1");
    key1.textContent = 1;

    /**
     * 
     * Key 2
     * 
     */

    const key2 = document.createElement("button");
    key2.setAttribute("id", "key2");
    key2.textContent = 2;

    /**
     * 
     * Key 3
     * 
     */

    const key3 = document.createElement("button");
    key3.setAttribute("id", "key3");
    key3.textContent = 3;

    /**
     * 
     * Key 4
     * 
     */

    const key4 = document.createElement("button");
    key4.setAttribute("id", "key4");
    key4.textContent = 4;

    /**
     * 
     * Key 5
     * 
     */

    const key5 = document.createElement("button");
    key5.setAttribute("id", "key5");
    key5.textContent = 5;

    /**
     * 
     * Key 6
     * 
     */

    const key6 = document.createElement("button");
    key6.setAttribute("id", "key6");
    key6.textContent = 6;

    /**
     * 
     * Key 7
     * 
     */

    const key7 = document.createElement("button");
    key7.setAttribute("id", "key7");
    key7.textContent = 7;

    /**
     * 
     * Key 8
     * 
     */

    const key8 = document.createElement("button");
    key8.setAttribute("id", "key8");
    key8.textContent = 8;

    /**
     * 
     * Key 9
     * 
     */

    const key9 = document.createElement("button");
    key9.setAttribute("id", "key9");
    key9.textContent = 9;

    /**
     * 
     * Key 0
     * 
     */

    const key0 = document.createElement("button");
    key0.setAttribute("id", "key0");
    key0.textContent = 0;

    /**
     * 
     * Key add
     * 
     */

    const keyAdd = document.createElement("button");
    keyAdd.setAttribute("id", "keyAdd");
    keyAdd.textContent = "+";
    keyAdd.classList.add("separator");

    /**
     * 
     * Key subtract
     * 
     */

    const keySubtract = document.createElement("button");
    keySubtract.setAttribute("id", "keySubtract");
    keySubtract.textContent = "-";
    keySubtract.classList.add("separator");

    /**
     * 
     * Key multiply
     * 
     */

    const keyMultiply = document.createElement("button");
    keyMultiply.setAttribute("id", "keyMultiply");
    keyMultiply.textContent = "×";
    keyMultiply.classList.add("separator");

    /**
     * 
     * Key divide
     * 
     */

    const keyDivide =  document.createElement("button");
    keyDivide.setAttribute("id", "keyDivide");
    keyDivide.textContent = "/";
    keyDivide.classList.add("separator");

    /**
     * 
     * Key total
     * 
     */

    const keyTotal =  document.createElement("button");
    keyTotal.setAttribute("id", "keyTotal");
    keyTotal.textContent = "=";
    keyTotal.classList.add("total");

    /**
     * 
     * Key period
     * 
     */

    const keyPeriod =  document.createElement("button");
    keyPeriod.setAttribute("id", "keyPeriod");
    keyPeriod.textContent = ".";
    keyPeriod.classList.add("total");

    /**
     * 
     * Key all clear
     * 
     */

    const keyClear =  document.createElement("button");
    keyClear.setAttribute("id", "keyClear");
    keyClear.textContent = "AC";
    keyClear.classList.add("remove");

    /**
     * 
     * Key backspace
     * 
     */

    const keyBack =  document.createElement("button");
    keyBack.setAttribute("id", "keyBack");
    keyBack.textContent = "DEL";
    keyBack.classList.add("remove");

    /**
     * 
     * Order of the HTML DOM
     * 
     */

    container.appendChild(item);
    item.appendChild(display);
    display.appendChild(text);
    item.appendChild(keys);
    keys.append(key1, key2, key3, key4, key5, key6, key7, key8, key9, key0,
        keyAdd, keySubtract, keyClear, keyMultiply, keyDivide, keyBack, keyPeriod, keyTotal);
    
    /**
     * 
     * Design
     * 
     */

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


    /**
     * 
     * CALCULATOR LOGIC
     * 
     */


    /**
     *
     * Global variables
     * 
     */

        let operand1 = "";
        let operator = "";
        let operand2 = "";
        let total = 0;

    /**
     * 
     * Methods
     * 
     */
    
    
    // The Unary + in Calculator constructor is important to get the expected result.

    function Calculator () {

        this.add = function (a, b) {

            return +(a + b).toFixed(2);

        };

        this.subtract = function (a, b) {

            return +(a - b).toFixed(2);

        };

        this.multiply = function (a, b) {

            return +(a * b).toFixed(2);

        };

        this.divide = function (a, b) {

            if (b === 0) return "The quotient is Infinity.";

            return +(a / b).toFixed(2);

        };

    }

    function operate (a, op, b) {

        const calculator = new Calculator();

        switch (op) {

            case "+":
                return calculator.add(a, b);

            case "-":
                return calculator.subtract(a, b);

            case "*":
                return calculator.multiply(a, b);

            case "/":
                return calculator.divide(a, b);

        }

    }

    function calculate (op1, op, op2) {

        // Applied "Unary +" to convert string to number.

        if (conditionToCalculate(op1, op, op2)) {

            return operate (+op1, op, +op2);

        } else {

            return +op1;

        }

    }

    /**
     * 
     * Helpers
     * 
     */

    function conditionToCalculate (op1 = operand1, op = operator, op2 = operand2) {

        return (op1 && op && op2) || (op && op2);
    
    }

    function storeOperator (op = operator) {

        if (conditionToCalculate) {

            total = calculate(operand1, operator, operand2);

        }

        if (total) {

            operand1 = total;
            operator = op;
            operand2 = "";

        } else {

            operator = op;

        }

    }

    function storeOperand (val) {

        if (operator) {

            return operand2 += val;

            // For debugging
            // console.log('operand1 = ' + operand1);
            // console.log('operator = ' + operator);
            // console.log('operand2 = ' + operand2);

        } else if (operator && operand2) {

            operand2 = "";
            return operand2 += val;

        } else if (total && operand1) {

            operand1 = "";
            return operand1 += val;

            // For debugging
            // console.log('operand1: ' + operand1);
            // console.log('operator: ' + operator);
            // console.log('operand2: ' + operand2);

        } else {

            return operand1 += val;

        }

    }

    function backspace () {
        
        if(!operator) {
            
            return operand1 = operand1.slice(0, -1);
            
        } else {
            
            return operand2 = operand2.slice(0, -1);
            
        }
        
    }

    function allClear () {

        operand1 = "";
        operator = "";
        operand2 = "";

    }

    function reload () {

        return location.reload();

    }

    /**
     * 
     * Listeners
     * 
     */

    keys.addEventListener("click", (event) => {

        let target = event.target;

        switch (target.id) {

            case "key0":
                text.textContent = storeOperand("0");
                break;

            case "key1":
                text.textContent = storeOperand("1");
                break;

            case "key2":
                text.textContent = storeOperand("2");
                break;

            case "key3":
                text.textContent = storeOperand("3");
                break;

            case "key4":
                text.textContent = storeOperand("4");
                break;

            case "key5":
                text.textContent = storeOperand("5");
                break;

            case "key6":
                text.textContent = storeOperand("6");
                break;

            case "key7":
                text.textContent = storeOperand("7");
                break;

            case "key8":
                text.textContent = storeOperand("8");
                break;

            case "key9":
                text.textContent = storeOperand("9");
                break;

            case "keyAdd":
                changeBgColor("keyAdd");
                text.textContent = storeOperator("+");
                break;

            case "keySubtract":
                changeBgColor("keySubtract");
                text.textContent = storeOperator("-");
                break;

            case "keyMultiply":
                changeBgColor("keyMultiply");
                text.textContent = storeOperator("*");
                break;

            case "keyDivide":
                changeBgColor("keyDivide");
                text.textContent = storeOperator("/");
                break;

            case "keyTotal":
                changeBgColor("keyTotal");
                
                if (conditionToCalculate()) {

                    total = calculate(operand1, operator, operand2);

                    operand1 = total;
                    operator = "";
                    operand2 = "";

                    text.textContent = total;

                } else {

                    text.textContent = operand1;

                }

                break;

            case "keyClear":
                changeBgColor("keyClear");
                text.textContent = reload();
                break;

            case "keyBack":
                changeBgColor("keyBack");
                text.textContent = backspace();
            break;

            case "keyPeriod":
                changeBgColor("keyBack");
                text.textContent = storeOperand(".");
            break;

        };

    });

})();