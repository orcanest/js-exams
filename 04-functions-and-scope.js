/*
 * JAVASCRIPT PRACTICE — 04: FUNCTIONS AND SCOPE
 * Run with: node 04-functions-and-scope.js
 *
 * Topics:
 * - function declarations
 * - function expressions
 * - arrow functions
 * - parameters and return values
 * - default parameters
 * - rest parameters
 * - scope and closures
 */

// --------------------------------------------------
// 1. Function declaration
// --------------------------------------------------
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alex"));

// --------------------------------------------------
// 2. Function expression
// --------------------------------------------------
const multiply = function (x, y) {
    return x * y;
};

console.log(multiply(4, 6));

// --------------------------------------------------
// 3. Arrow function
// --------------------------------------------------
const square = (number) => number * number;

console.log(square(5));

// --------------------------------------------------
// 4. Default parameters
// --------------------------------------------------
function welcome(name = "Guest") {
    return `Welcome, ${name}.`;
}

console.log(welcome());
console.log(welcome("Saeid"));

// --------------------------------------------------
// 5. Rest parameters
// --------------------------------------------------
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(10, 20, 30));

// --------------------------------------------------
// 6. Scope
// --------------------------------------------------
const globalMessage = "I am in global scope.";

function showMessage() {
    const localMessage = "I am in function scope.";
    console.log(globalMessage);
    console.log(localMessage);
}

showMessage();

// localMessage is not accessible here.

// --------------------------------------------------
// 7. Closure
// --------------------------------------------------
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// The inner function remembers the variable from its outer function.

// --------------------------------------------------
// 8. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Write a function that receives two numbers and returns the larger.
// Exercise 2: Write an arrow function that converts Celsius to Fahrenheit.
// Exercise 3: Write a function that receives any number of values and returns
//             their average. Handle the case where no values are provided.
// Exercise 4: Create a closure-based counter with increment and reset methods.
// Exercise 5: Explain in your own words the difference between parameters
//             and arguments.

// --------------------------------------------------
// 9. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
function getLarger(first, second) {
    return first > second ? first : second;
}

const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

function average(...numbers) {
    if (numbers.length === 0) return 0;
    const total = numbers.reduce((sum, number) => sum + number, 0);
    return total / numbers.length;
}

function createManagedCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        reset() {
            count = 0;
            return count;
        }
    };
}
*/
