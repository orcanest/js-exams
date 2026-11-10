/*
 * JAVASCRIPT PRACTICE — 09: ASYNCHRONOUS JAVASCRIPT
 * Run with: node 09-async-javascript-and-fetch.js
 *
 * Topics:
 * - synchronous vs asynchronous execution
 * - callbacks
 * - Promises
 * - async / await
 * - fetch
 * - error handling
 * - Promise.all
 * - AbortController
 */

// --------------------------------------------------
// 1. Synchronous execution
// --------------------------------------------------
console.log("First");
console.log("Second");
console.log("Third");

// --------------------------------------------------
// 2. Callback example
// --------------------------------------------------
function runAfterDelay(callback) {
    setTimeout(() => {
        callback("The task is complete.");
    }, 500);
}

runAfterDelay((message) => {
    console.log(message);
});

// --------------------------------------------------
// 3. Creating a Promise
// --------------------------------------------------
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

wait(300).then(() => {
    console.log("Promise resolved.");
});

// --------------------------------------------------
// 4. async / await
// --------------------------------------------------
async function demonstrateAsync() {
    console.log("Async function started.");
    await wait(200);
    console.log("Finished waiting.");
}

demonstrateAsync();

// --------------------------------------------------
// 5. Fetch data from an API
// --------------------------------------------------
async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=5");

        // fetch() does not reject automatically for HTTP error status codes.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        for (const product of data.products) {
            console.log(`${product.title}: $${product.price}`);
        }
    } catch (error) {
        console.error("Could not load products:", error.message);
    }
}

// Uncomment the next line to make an actual network request.
// fetchProducts();

// --------------------------------------------------
// 6. Promise.all
// --------------------------------------------------
async function loadMultipleResources() {
    const urls = [
        "https://dummyjson.com/products/1",
        "https://dummyjson.com/products/2"
    ];

    try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));

        for (const response of responses) {
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
        }

        const products = await Promise.all(
            responses.map((response) => response.json())
        );

        console.log("Loaded products:", products);
    } catch (error) {
        console.error("A request failed:", error.message);
    }
}

// Uncomment to run the parallel API requests.
// loadMultipleResources();

// --------------------------------------------------
// 7. AbortController
// --------------------------------------------------
async function fetchWithTimeout(url, timeoutMs = 3000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return await response.json();
    } finally {
        clearTimeout(timeoutId);
    }
}

// --------------------------------------------------
// 8. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Create a Promise that resolves with "Done" after one second.
// Exercise 2: Use async/await to wait for that Promise.
// Exercise 3: Fetch one product from DummyJSON and print its title.
// Exercise 4: Handle network errors and non-OK HTTP responses separately.
// Exercise 5: Fetch three products concurrently with Promise.all.
// Exercise 6: Add an AbortController timeout to an API request.

// --------------------------------------------------
// 9. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
const delayedMessage = new Promise((resolve) => {
    setTimeout(() => resolve("Done"), 1000);
});

async function runExercises() {
    const message = await delayedMessage;
    console.log(message);

    try {
        const response = await fetch("https://dummyjson.com/products/1");

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const product = await response.json();
        console.log(product.title);
    } catch (error) {
        console.error("Request or network error:", error.message);
    }
}

// runExercises();
*/
