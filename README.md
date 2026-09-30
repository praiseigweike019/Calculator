<!-- #  Calculator

A responsive and interactive calculator built with **HTML, CSS, and JavaScript**. The project provides basic arithmetic operations through a clean calculator interface and includes a **three-theme color switcher** for different visual styles.

##  Live Demo

**Live Website:**
https://praiseigweike019.github.io/Calculator/

## 📖 About the Project

This calculator was developed as a frontend web development project to practice building an interactive user interface and handling user input with JavaScript.

The calculator allows users to perform basic arithmetic calculations while providing controls for deleting input, resetting the calculator, formatting numbers, and switching between three different themes.

##  Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 🔢 Decimal number support
* 🗑️ Delete button
* 🔄 Reset button
* 🟰 Calculation/equal button
* 🔢 Automatic number formatting with thousands separators
*  Error handling for invalid calculations
*  Three different calculator themes
*  Prevents multiple decimal points in the same number
*  Prevents operators from being entered consecutively
*  Clean and responsive calculator layout

##  Themes

The calculator includes three selectable themes:

| Theme       | Description                       |
| ----------- | --------------------------------- |
| **Theme 1** | Dark blue calculator theme        |
| **Theme 2** | Light calculator theme            |
| **Theme 3** | Dark purple/neon calculator theme |

Clicking the theme toggle cycles through the three available themes.

##  Technologies Used

* **HTML5** — Structure and calculator interface
* **CSS3** — Styling, layout, themes, colors, and calculator design
* **JavaScript** — Calculator functionality, user interactions, number formatting, and theme switching
* **Google Fonts** — League Spartan and Raleway

##  Project Structure

```text
Calculator/
│
├── index.html
├── calcu.css
├── calcu.js
├── favicon-32x32.png
└── README.md
```

##  How It Works

### Number Input

The JavaScript listens for clicks on the number buttons and adds the selected values to the current calculation.

The calculator also prevents users from entering more than one decimal point in the same number.

### Arithmetic Operations

The calculator supports:

```text
+
-
x
/
```

The multiplication symbol `x` displayed on the calculator is converted to JavaScript's `*` operator before the calculation is performed.

### Calculation

When the `=` button is pressed, JavaScript evaluates the entered mathematical expression and displays the result.

### Delete

The **DEL** button removes the most recently entered character from the calculation.

### Reset

The **RESET** button clears the current calculation and returns the display to:

```text
0
```

### Number Formatting

Large numbers are automatically formatted using thousands separators.

For example:

```text
1000000
```

is displayed as:

```text
1,000,000
```

### Error Handling

If the calculation cannot be evaluated correctly, the calculator displays:

```text
Error
```

and clears the current calculation.

##  CSS Theme System

The calculator uses CSS custom properties (CSS variables) to control its colors.

Themes are selected through the HTML attribute:

```html
data-theme="dark"
```

The JavaScript changes this attribute when the theme toggle is clicked:

```text
dark → light → darkS → dark
```

This allows the same calculator interface to use different color schemes without changing the calculator structure.

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/praiseigweike019/Calculator.git
```

### 2. Open the project

Navigate into the project folder:

```bash
cd Calculator
```

### 3. Run the calculator

Open `index.html` in your web browser.

No additional installation or dependencies are required.

##  Example Calculation

The calculator can perform expressions such as:

```text
25 + 15
```

Result:

```text
40
```

It also supports operations such as:

```text
100 / 4
```

Result:

```text
25
```

##  What I Learned

This project helped me practice:

* Structuring a web application with HTML5
* Styling interfaces with CSS3
* Working with CSS custom properties
* Creating multiple visual themes
* Selecting and manipulating HTML elements with JavaScript
* Handling button click events
* Managing calculator state
* Validating user input
* Formatting numbers with JavaScript
* Using JavaScript functions
* Connecting HTML, CSS, and JavaScript into a functional web application

## 🔮 Possible Future Improvements

Future versions of the calculator could include:

* Keyboard support
* Calculation history
* Percentage functionality
* Plus/minus functionality
* More advanced mathematical operations
* Improved mobile responsiveness
* Saving the selected theme with `localStorage`

## 👨‍💻 Author

**Praise Igweike**

Computer Science Student | Frontend Developer

### Project

**Calculator — HTML, CSS & JavaScript**

---

⭐ If you find this project useful, feel free to explore the code and build upon it. -->
