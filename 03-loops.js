/*
 * JAVASCRIPT PRACTICE — 03: LOOPS
 * Run with: node 03-loops.js
 *
 * Topics:
 * - for
 * - while
 * - do...while
 * - for...of
 * - break and continue
 */

// --------------------------------------------------
// 1. for loop
// --------------------------------------------------
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// --------------------------------------------------
// 2. while loop
// --------------------------------------------------
let countdown = 3;

while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

console.log("Go!");

// --------------------------------------------------
// 3. do...while loop
// --------------------------------------------------
let attempt = 0;

do {
    console.log(`Attempt: ${attempt + 1}`);
    attempt++;
} while (attempt < 3);

// --------------------------------------------------
// 4. for...of: iterate over iterable values
// --------------------------------------------------
const languages = ["JavaScript", "C#", "Python"];

for (const language of languages) {
    console.log(language);
}

// --------------------------------------------------
// 5. break and continue
// --------------------------------------------------
for (let number = 1; number <= 10; number++) {
    if (number === 3) {
        continue; // Skip this iteration.
    }

    if (number === 8) {
        break; // Stop the loop completely.
    }

    console.log(number);
}

// --------------------------------------------------
// 6. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Print numbers from 1 to 20.
// Exercise 2: Print only even numbers from 1 to 30.
// Exercise 3: Calculate the sum of numbers from 1 to 100.
// Exercise 4: Given an array of names, print each name with its index.
// Exercise 5: Find the first number greater than 50 in an array and stop.

// --------------------------------------------------
// 7. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum);

const names = ["Mina", "Reza", "Sara"];
for (let index = 0; index < names.length; index++) {
    console.log(index, names[index]);
}

const values = [12, 25, 48, 63, 70];
for (const value of values) {
    if (value > 50) {
        console.log("First match:", value);
        break;
    }
}
*/
