/*
 * JAVASCRIPT PRACTICE — 06: OBJECTS AND DESTRUCTURING
 * Run with: node 06-objects-and-destructuring.js
 *
 * Topics:
 * - object literals
 * - properties and methods
 * - optional chaining
 * - object destructuring
 * - spread syntax
 * - Object.keys, Object.values, Object.entries
 */

// --------------------------------------------------
// 1. Creating objects
// --------------------------------------------------
const user = {
    id: 1,
    name: "Alex",
    email: "alex@example.com",
    isActive: true,
    address: {
        city: "Mashhad",
        country: "Iran"
    },
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(user.name);
console.log(user["email"]);
console.log(user.greet());

// --------------------------------------------------
// 2. Updating and adding properties
// --------------------------------------------------
user.name = "Jordan";
user.role = "developer";

console.log(user);

// --------------------------------------------------
// 3. Optional chaining and nullish coalescing
// --------------------------------------------------
console.log(user.address?.city);

const missingCity = user.profile?.city ?? "Unknown";
console.log(missingCity);

// --------------------------------------------------
// 4. Object destructuring
// --------------------------------------------------
const { name, email } = user;
console.log(name, email);

const { city } = user.address;
console.log(city);

// --------------------------------------------------
// 5. Renaming and default values
// --------------------------------------------------
const { name: displayName, phone = "Not provided" } = user;
console.log(displayName, phone);

// --------------------------------------------------
// 6. Spread syntax
// --------------------------------------------------
const updatedUser = {
    ...user,
    isActive: false
};

console.log(updatedUser);

// Spread is shallow: nested objects are still shared references.
const deepCopyExample = {
    ...user,
    address: { ...user.address }
};
deepCopyExample.address.city = "Tehran";
console.log(user.address.city); // Still "Mashhad"

// --------------------------------------------------
// 7. Object utility methods
// --------------------------------------------------
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// --------------------------------------------------
// 8. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Create a book object with title, author, year, and a method
//             that returns a description.
// Exercise 2: Destructure title and author from the book object.
// Exercise 3: Create a copy of the book object and change its year.
// Exercise 4: Safely read a nested property that may not exist.
// Exercise 5: Convert an object into an array of [key, value] pairs.

// --------------------------------------------------
// 9. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
const book = {
    title: "The Phoenix Project",
    author: "Gene Kim",
    year: 2013,
    describe() {
        return `${this.title} was written by ${this.author}.`;
    }
};

const { title, author } = book;
const revisedBook = { ...book, year: 2020 };
const publisherName = book.publisher?.name ?? "Unknown";
const bookEntries = Object.entries(book);

console.log(book.describe());
console.log(title, author, revisedBook, publisherName, bookEntries);
*/
