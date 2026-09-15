// GET HTML ELEMENTS

// Get the calculator display
const display = document.querySelector("#display");

// Get all number and decimal buttons
const numberButtons = document.querySelectorAll(".number-key");

// Get all operator buttons
const operatorButtons = document.querySelectorAll(".operator-key");

// Get important buttons
const deleteButton = document.querySelector("#delete");
const resetButton = document.querySelector("#reset");
const equalsButton = document.querySelector("#equals");

// Get theme toggle
const themeToggle = document.querySelector("#themeToggle");


// CALCULATOR VARIABLES
// Stores the number currently being typed
let currentNumber = "";

// Stores the complete calculation
let calculation = "";

// Checks whether the last button was an operator
let lastWasOperator = false;

// NUMBER BUTTONS
numberButtons.forEach((button) => {

  button.addEventListener("click", function() {

    const value = button.textContent;

    // Prevent multiple decimal points
    if (value === "." && currentNumber.includes(".")) {
      return;
    }

    currentNumber += value;
    calculation += value;

    display.value = formatNumber(currentNumber);

    lastWasOperator = false;

  });

});


// OPERATOR BUTTONS
operatorButtons.forEach((button) => {

  button.addEventListener("click", function() {

    const operator = button.textContent;

    // Don't allow an operator first
    if (calculation === "") {
      return;
    }

    // Don't allow two operators together
    if (lastWasOperator) {
      return;
    }

    // Change x to *
    if (operator === "x") {
      calculation += "*";
    } else {
      calculation += operator;
    }

    currentNumber = "";

    lastWasOperator = true;

  });

});


// EQUALS BUTTON

equalsButton.addEventListener("click", function() {

  if (calculation === "") {
    return;
  }

  try {

    const result = eval(calculation);

    display.value = formatNumber(result.toString());

    calculation = result.toString();
    currentNumber = result.toString();

    lastWasOperator = false;

  } catch (error) {

    display.value = "Error";

    calculation = "";
    currentNumber = "";

  }

});


// DELETE BUTTON
deleteButton.addEventListener("click", function() {

  calculation = calculation.slice(0, -1);

  currentNumber = currentNumber.slice(0, -1);

  display.value = currentNumber || "0";

});


// RESET BUTTON
resetButton.addEventListener("click", function() {

  calculation = "";
  currentNumber = "";
  lastWasOperator = false;

  display.value = "0";

});



// NUMBER FORMATTING


function formatNumber(number) {

  if (number === "") {
    return "0";
  }

  if (number.includes(".")) {

    const parts = number.split(".");

    return Number(parts[0]).toLocaleString() + "." + parts[1];

  }

  return Number(number).toLocaleString();

}


// THEME SWITCHER


let currentTheme = 1;

themeToggle.addEventListener("click", function() {

  currentTheme++;

  if (currentTheme > 3) {
    currentTheme = 1;
  }

  // Theme 1
  if (currentTheme === 1) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Theme 2
  if (currentTheme === 2) {
    document.documentElement.setAttribute("data-theme", "light");
  }

  // Theme 3
  if (currentTheme === 3) {
    document.documentElement.setAttribute("data-theme", "darkS");
  }

  // Reset toggle position
  themeToggle.classList.remove("theme-2", "theme-3");

  // Move toggle to position 2
  if (currentTheme === 2) {
    themeToggle.classList.add("theme-2");
  }

  // Move toggle to position 3
  if (currentTheme === 3) {
    themeToggle.classList.add("theme-3");
  }
});