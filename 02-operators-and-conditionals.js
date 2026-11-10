/*
 * JAVASCRIPT PRACTICE — 02: OPERATORS AND CONDITIONALS
 * Run with: node 02-operators-and-conditionals.js
 *
 * Topics:
 * - arithmetic and assignment operators
 * - comparison and logical operators
 * - if / else if / else
 * - switch
 * - ternary operator
 */

// --------------------------------------------------
// 1. Arithmetic operators
// --------------------------------------------------
const a = 17;
const b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder
console.log(a ** 2); // Exponentiation

// --------------------------------------------------
// 2. Comparison operators
// --------------------------------------------------
console.log(10 > 5);
console.log(10 === "10"); // Strict equality checks value and type.
console.log(10 == "10");  // Loose equality performs type coercion.
console.log(10 !== 5);

// Prefer === and !== in most application code.

// --------------------------------------------------
// 3. Logical operators
// --------------------------------------------------
const hasAccount = true;
const isVerified = false;

console.log(hasAccount && isVerified); // AND
console.log(hasAccount || isVerified); // OR
console.log(!hasAccount);              // NOT

// --------------------------------------------------
// 4. if / else if / else
// --------------------------------------------------
const temperature = 28;

if (temperature >= 35) {
    console.log("It is very hot.");
} else if (temperature >= 20) {
    console.log("The weather is warm.");
} else if (temperature >= 10) {
    console.log("The weather is cool.");
} else {
    console.log("It is cold.");
}

// --------------------------------------------------
// 5. switch
// --------------------------------------------------
const role = "editor";

switch (role) {
    case "admin":
        console.log("Full access");
        break;
    case "editor":
        console.log("Can edit content");
        break;
    case "viewer":
        console.log("Read-only access");
        break;
    default:
        console.log("Unknown role");
}

// --------------------------------------------------
// 6. Ternary operator
// --------------------------------------------------
const userAge = 20;
const accessMessage = userAge >= 18 ? "Access granted" : "Access denied";

console.log(accessMessage);

// --------------------------------------------------
// 7. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Check whether a number is positive, negative, or zero.
// Exercise 2: Check whether a number is even or odd.
// Exercise 3: Given an age, print whether the person is a child, teenager,
//             or adult. Choose sensible age ranges.
// Exercise 4: Use switch to print the name of a day based on a number 1–7.
// Exercise 5: Check whether a user can log in. They need a correct password
//             AND an active account.

// --------------------------------------------------
// 8. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
const number = -7;
if (number > 0) console.log("Positive");
else if (number < 0) console.log("Negative");
else console.log("Zero");

const value = 14;
console.log(value % 2 === 0 ? "Even" : "Odd");

const ageToCheck = 16;
if (ageToCheck < 13) console.log("Child");
else if (ageToCheck < 18) console.log("Teenager");
else console.log("Adult");

const day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}

const passwordIsCorrect = true;
const accountIsActive = true;
console.log(passwordIsCorrect && accountIsActive ? "Login successful" : "Login failed");
*/
