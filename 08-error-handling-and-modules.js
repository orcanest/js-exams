/*
 * JAVASCRIPT PRACTICE — 08: ERROR HANDLING AND MODULES
 * Run with: node 08-error-handling-and-modules.js
 *
 * Topics:
 * - try / catch / finally
 * - throwing errors
 * - custom error classes
 * - strict input validation
 * - module concepts
 *
 * This is a single-file practice example. Real ES modules are commonly
 * split into separate .js files and use export/import statements.
 */

// --------------------------------------------------
// 1. try / catch / finally
// --------------------------------------------------
function parseUserInput(input) {
    try {
        const result = JSON.parse(input);
        console.log("Valid JSON:", result);
        return result;
    } catch (error) {
        console.error("Could not parse JSON:", error.message);
        return null;
    } finally {
        console.log("Parsing attempt finished.");
    }
}

parseUserInput('{"name":"Alex"}');
parseUserInput("{invalid json}");

// --------------------------------------------------
// 2. Throwing errors
// --------------------------------------------------
function divide(dividend, divisor) {
    if (typeof dividend !== "number" || typeof divisor !== "number") {
        throw new TypeError("Both arguments must be numbers.");
    }

    if (divisor === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return dividend / divisor;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
}

// --------------------------------------------------
// 3. Custom error class
// --------------------------------------------------
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUsername(username) {
    if (typeof username !== "string" || username.trim().length < 3) {
        throw new ValidationError("Username must contain at least 3 characters.");
    }

    return true;
}

try {
    validateUsername("ab");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation failed:", error.message);
    } else {
        throw error;
    }
}

// --------------------------------------------------
// 4. Input validation
// --------------------------------------------------
function calculateDiscount(price, percentage) {
    if (!Number.isFinite(price) || price < 0) {
        throw new RangeError("Price must be a non-negative finite number.");
    }

    if (!Number.isFinite(percentage) || percentage < 0 || percentage > 100) {
        throw new RangeError("Percentage must be between 0 and 100.");
    }

    return price - (price * percentage / 100);
}

console.log(calculateDiscount(200, 15));

// --------------------------------------------------
// 5. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Write a function that validates an email-like string.
//             Throw a TypeError if the input is not a string.
// Exercise 2: Create a custom InsufficientBalanceError.
// Exercise 3: Write a safe JSON parser that returns a fallback value on error.
// Exercise 4: Research how export and import work in JavaScript ES modules.
// Exercise 5: Create two files, math.js and app.js, and export/import an
//             add() function. (This exercise intentionally requires extra files.)

// --------------------------------------------------
// 6. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
class InsufficientBalanceError extends Error {
    constructor(message = "Insufficient balance.") {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

function safeParse(json, fallback = null) {
    try {
        return JSON.parse(json);
    } catch {
        return fallback;
    }
}

function validateEmail(value) {
    if (typeof value !== "string") {
        throw new TypeError("Email must be a string.");
    }

    const hasBasicEmailShape = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
    if (!hasBasicEmailShape) {
        throw new ValidationError("Email format is invalid.");
    }

    return true;
}
*/
