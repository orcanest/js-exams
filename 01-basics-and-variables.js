/*
 * JAVASCRIPT PRACTICE — 01: BASICS AND VARIABLES
 * Run with: node 01-basics-and-variables.js
 *
 * Topics:
 * - console output
 * - let, const, and var
 * - primitive data types
 * - typeof
 * - type conversion
 * - template literals
 */

// --------------------------------------------------
// 1. Console output
// --------------------------------------------------
console.log("Hello, JavaScript!");
console.log("I am practicing JavaScript.");

// --------------------------------------------------
// 2. Variables: const and let
// --------------------------------------------------
const firstName = "Saeid"; // Use const when you do not reassign the variable.
let age = 25;              // Use let when the value may change.

age = age + 1;

console.log(`Name: ${firstName}`);
console.log(`Age next year: ${age}`);

// --------------------------------------------------
// 3. Primitive data types
// --------------------------------------------------
const userName = "Alex";       // string
const score = 95;              // number
const isActive = true;         // boolean
const selectedItem = null;     // null
let unassignedValue;           // undefined
const largeNumber = 123n;      // bigint
const uniqueId = Symbol("id"); // symbol

console.log(typeof userName);
console.log(typeof score);
console.log(typeof isActive);
console.log(typeof unassignedValue);
console.log(typeof largeNumber);
console.log(typeof uniqueId);

// Note: typeof null returns "object". This is a historical JavaScript behavior.
console.log(typeof selectedItem);

// --------------------------------------------------
// 4. Type conversion
// --------------------------------------------------
const numericText = "42";
const convertedNumber = Number(numericText);

const price = 19.99;
const priceText = String(price);

console.log(convertedNumber + 8); // 50
console.log(priceText);

// Be careful: Number("hello") returns NaN.
console.log(Number("hello"));

// --------------------------------------------------
// 5. Template literals
// --------------------------------------------------
const product = "Keyboard";
const productPrice = 49.5;

console.log(`The ${product} costs $${productPrice}.`);

// --------------------------------------------------
// 6. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1:
// Create variables for your name, city, and favorite programming language.
// Print them in one sentence using a template literal.

// Exercise 2:
// Convert the string "150" to a number and add 25 to it.

// Exercise 3:
// Create a boolean variable named hasCompletedCourse.
// Print its type using typeof.

// Exercise 4:
// Create a variable with let, change its value, and print the new value.

// --------------------------------------------------
// 7. SUGGESTED SOLUTIONS
// --------------------------------------------------
// Uncomment the code below after trying the exercises yourself.

/*
const myName = "Saeid";
const city = "Mashhad";
const favoriteLanguage = "JavaScript";
console.log(`My name is ${myName}, I live in ${city}, and I am learning ${favoriteLanguage}.`);

const amount = Number("150");
console.log(amount + 25);

const hasCompletedCourse = false;
console.log(typeof hasCompletedCourse);

let currentLevel = "Beginner";
currentLevel = "Intermediate";
console.log(currentLevel);
*/
