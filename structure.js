const container = document.querySelector(".container");
const item = document.createElement("div");
item.setAttribute("class", "item");
container.appendChild(item);
const display = document.createElement("div");
display.setAttribute("class", "display");
item.appendChild(display);
const keys = document.createElement("div");
keys.setAttribute("class", "keys");
item.appendChild(keys);
const key0 = document.createElement("div");
const key1 = document.createElement("div");
const key2 = document.createElement("div");
const key3 = document.createElement("div");
const key4 = document.createElement("div");
const key5 = document.createElement("div");
const key6 = document.createElement("div");
const key7 = document.createElement("div");
const key8 = document.createElement("div");
const key9 = document.createElement("div");
const keyAdd = document.createElement("div");
const keySubtract = document.createElement("div");
const keyMultiply = document.createElement("div");
const keyDivide =  document.createElement("div");
keys.append(key0, key1, key2, key3, key4)
// i want to add div keys
// but enclose them all in an event listener
// with switch case statements, like in javascript.info
// i also need separate functions to do the actions