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

// i want to add div keys
// but enclose them all in an event listener
// with switch case statements, like in javascript.info
// i also need separate functions to do the actions