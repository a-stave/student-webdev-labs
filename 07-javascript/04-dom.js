// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let inputElement = document.getElementById("userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector(".output");

// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  output.textContent = inputElement.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let inputElement2 = document.getElementById("userInput2");

// add an event listener on the target element
inputElement2.addEventListener("input", handleInput);

let section = document.querySelector("#inputEventExample");
let element = document.createElement("div");
element.setAttribute("class", "output");
section.append(element);

// callback function to handle event
function handleInput(event) {
  element.textContent = inputElement2.value;
}
