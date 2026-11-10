/*
 * JAVASCRIPT PRACTICE — 07: JSON, MAP, SET, AND DATA HANDLING
 * Run with: node 07-dom-independent-data-and-json.js
 *
 * This file focuses on JavaScript data handling and works in Node.js.
 * Topics:
 * - JSON.stringify and JSON.parse
 * - Map
 * - Set
 * - date handling
 * - sorting and grouping data
 */

// --------------------------------------------------
// 1. JSON serialization
// --------------------------------------------------
const profile = {
    username: "alex",
    skills: ["JavaScript", "Git"],
    active: true
};

const jsonText = JSON.stringify(profile, null, 2);
console.log(jsonText);

// --------------------------------------------------
// 2. JSON parsing
// --------------------------------------------------
const parsedProfile = JSON.parse(jsonText);
console.log(parsedProfile.username);

// JSON is a data format. It does not support functions or undefined values.

// --------------------------------------------------
// 3. Map
// --------------------------------------------------
const userRoles = new Map();

userRoles.set("alex", "admin");
userRoles.set("sara", "editor");

console.log(userRoles.get("alex"));
console.log(userRoles.has("sara"));

for (const [username, role] of userRoles) {
    console.log(`${username}: ${role}`);
}

// --------------------------------------------------
// 4. Set: store unique values
// --------------------------------------------------
const tags = new Set(["linux", "devops", "linux", "javascript"]);
console.log(tags);
console.log([...tags]);

// --------------------------------------------------
// 5. Date
// --------------------------------------------------
const now = new Date();
console.log(now.toISOString());

const specificDate = new Date("2025-01-15T10:30:00Z");
console.log(specificDate.getUTCFullYear());

// --------------------------------------------------
// 6. Working with a collection of records
// --------------------------------------------------
const orders = [
    { id: 1, status: "paid", amount: 120 },
    { id: 2, status: "pending", amount: 80 },
    { id: 3, status: "paid", amount: 200 },
    { id: 4, status: "cancelled", amount: 50 }
];

const paidOrders = orders.filter((order) => order.status === "paid");
const paidRevenue = paidOrders.reduce((sum, order) => sum + order.amount, 0);

console.log("Paid orders:", paidOrders);
console.log("Paid revenue:", paidRevenue);

// --------------------------------------------------
// 7. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Convert an object to JSON and parse it back.
// Exercise 2: Remove duplicate email addresses using Set.
// Exercise 3: Use Map to store product IDs and product names.
// Exercise 4: Calculate the total amount of completed orders.
// Exercise 5: Sort orders by amount, from highest to lowest.

// --------------------------------------------------
// 8. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
const original = { id: 10, name: "Sample" };
const serialized = JSON.stringify(original);
const restored = JSON.parse(serialized);

const emails = ["a@test.com", "b@test.com", "a@test.com"];
const uniqueEmails = [...new Set(emails)];

const productMap = new Map([
    [101, "Keyboard"],
    [102, "Mouse"]
]);

const completedOrders = [
    { status: "completed", amount: 30 },
    { status: "pending", amount: 20 },
    { status: "completed", amount: 70 }
];

const completedTotal = completedOrders
    .filter((order) => order.status === "completed")
    .reduce((sum, order) => sum + order.amount, 0);

const sortedOrders = [...orders].sort((a, b) => b.amount - a.amount);

console.log({ restored, uniqueEmails, productMap, completedTotal, sortedOrders });
*/
