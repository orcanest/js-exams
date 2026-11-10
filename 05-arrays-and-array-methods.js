/*
 * JAVASCRIPT PRACTICE — 05: ARRAYS AND ARRAY METHODS
 * Run with: node 05-arrays-and-array-methods.js
 *
 * Topics:
 * - creating and accessing arrays
 * - push, pop, shift, unshift
 * - slice and splice
 * - forEach, map, filter, find
 * - reduce, some, every
 * - sorting and spread syntax
 */

// --------------------------------------------------
// 1. Creating and accessing arrays
// --------------------------------------------------
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits.length);

// --------------------------------------------------
// 2. Mutating array methods
// --------------------------------------------------
fruits.push("Mango");     // Add to the end.
fruits.pop();             // Remove from the end.
fruits.unshift("Pear");   // Add to the beginning.
fruits.shift();           // Remove from the beginning.

console.log(fruits);

// --------------------------------------------------
// 3. slice and splice
// --------------------------------------------------
const numbers = [10, 20, 30, 40, 50];

const copiedPart = numbers.slice(1, 3); // Does not modify original array.
console.log(copiedPart);

const removedItems = numbers.splice(2, 1); // Modifies original array.
console.log(removedItems);
console.log(numbers);

// --------------------------------------------------
// 4. forEach: perform an action for each item
// --------------------------------------------------
const scores = [70, 85, 90];

scores.forEach((score, index) => {
    console.log(`Score ${index + 1}: ${score}`);
});

// --------------------------------------------------
// 5. map: create a transformed array
// --------------------------------------------------
const doubled = scores.map((score) => score * 2);
console.log(doubled);

// --------------------------------------------------
// 6. filter: create an array of matching items
// --------------------------------------------------
const highScores = scores.filter((score) => score >= 80);
console.log(highScores);

// --------------------------------------------------
// 7. find: return the first matching item
// --------------------------------------------------
const firstHighScore = scores.find((score) => score >= 80);
console.log(firstHighScore);

// --------------------------------------------------
// 8. reduce: combine values into one result
// --------------------------------------------------
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore);

// --------------------------------------------------
// 9. some and every
// --------------------------------------------------
console.log(scores.some((score) => score < 60));
console.log(scores.every((score) => score >= 50));

// --------------------------------------------------
// 10. Sorting numbers
// --------------------------------------------------
const unsorted = [40, 5, 100, 25];
const ascending = [...unsorted].sort((x, y) => x - y);

console.log(ascending);
console.log(unsorted); // Original array is unchanged.

// --------------------------------------------------
// 11. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: From an array of numbers, create a new array containing squares.
// Exercise 2: Filter all numbers greater than 10.
// Exercise 3: Find the first product with a price below 100.
// Exercise 4: Calculate the total price of all products using reduce.
// Exercise 5: Sort an array of numbers from highest to lowest.
// Exercise 6: Remove duplicate values from an array.

// --------------------------------------------------
// 12. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
const values = [2, 5, 8, 11, 14];
const squares = values.map((value) => value ** 2);
const greaterThanTen = values.filter((value) => value > 10);

const products = [
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 220 },
    { name: "Cable", price: 8 }
];

const affordableProduct = products.find((product) => product.price < 100);
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

const descending = [...values].sort((a, b) => b - a);
const uniqueValues = [...new Set([1, 2, 2, 3, 3, 4])];

console.log({ squares, greaterThanTen, affordableProduct, totalPrice, descending, uniqueValues });
*/
