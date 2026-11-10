/*
 * JAVASCRIPT PRACTICE — 10: OOP AND ADVANCED CONCEPTS
 * Run with: node 10-oop-and-advanced-concepts.js
 *
 * Topics:
 * - constructor functions and classes
 * - constructors and methods
 * - inheritance
 * - encapsulation with private fields
 * - getters and setters
 * - static methods
 * - polymorphism
 * - prototypes
 * - this, call, apply, bind
 * - recursion
 * - higher-order functions
 */

// --------------------------------------------------
// 1. Classes and objects
// --------------------------------------------------
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `My name is ${this.name}.`;
    }
}

const user = new User("Alex", "alex@example.com");
console.log(user.introduce());

// --------------------------------------------------
// 2. Inheritance
// --------------------------------------------------
class Admin extends User {
    constructor(name, email, permissions = []) {
        super(name, email);
        this.permissions = permissions;
    }

    hasPermission(permission) {
        return this.permissions.includes(permission);
    }
}

const admin = new Admin("Sara", "sara@example.com", ["users:read", "users:delete"]);
console.log(admin.introduce());
console.log(admin.hasPermission("users:delete"));

// --------------------------------------------------
// 3. Encapsulation with private fields
// --------------------------------------------------
class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new RangeError("Initial balance cannot be negative.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit must be positive.");
        }

        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.#balance) {
            throw new RangeError("Invalid withdrawal amount.");
        }

        this.#balance -= amount;
    }

    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(25);
console.log(account.balance);

// account.#balance is not accessible outside the class.

// --------------------------------------------------
// 4. Static methods
// --------------------------------------------------
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(4, 7));

// --------------------------------------------------
// 5. Polymorphism
// --------------------------------------------------
class Notification {
    send(message) {
        return `Sending notification: ${message}`;
    }
}

class EmailNotification extends Notification {
    send(message) {
        return `Sending email: ${message}`;
    }
}

class SmsNotification extends Notification {
    send(message) {
        return `Sending SMS: ${message}`;
    }
}

const notificationChannels = [
    new EmailNotification(),
    new SmsNotification()
];

notificationChannels.forEach((channel) => {
    console.log(channel.send("Your account was updated."));
});

// --------------------------------------------------
// 6. Prototypes
// --------------------------------------------------
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    return `${this.name} makes a sound.`;
};

const dog = new Animal("Dog");
console.log(dog.speak());

// JavaScript classes use the prototype system under the hood.

// --------------------------------------------------
// 7. this, call, apply, and bind
// --------------------------------------------------
const person = {
    name: "Jordan"
};

function sayHello(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

console.log(sayHello.call(person, "Hello", "!"));
console.log(sayHello.apply(person, ["Hi", "."]));

const boundGreeting = sayHello.bind(person, "Welcome");
console.log(boundGreeting("!"));

// --------------------------------------------------
// 8. Recursion
// --------------------------------------------------
function factorial(number) {
    if (number < 0) {
        throw new RangeError("Factorial is not defined for negative numbers.");
    }

    if (number <= 1) {
        return 1; // Base case prevents infinite recursion.
    }

    return number * factorial(number - 1);
}

console.log(factorial(5)); // 120

// --------------------------------------------------
// 9. Higher-order functions
// --------------------------------------------------
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10));
console.log(triple(10));

// --------------------------------------------------
// 10. PRACTICE EXERCISES
// --------------------------------------------------
// Exercise 1: Create a Product class with name, price, and a getInfo() method.
// Exercise 2: Create a DigitalProduct class that extends Product and adds
//             a fileSize property.
// Exercise 3: Add a private field to a class and expose it through a getter.
// Exercise 4: Create a Shape base class and Circle/Rectangle subclasses.
//             Each subclass should implement getArea().
// Exercise 5: Write a recursive function that calculates the sum from 1 to n.
// Exercise 6: Write a higher-order function that accepts another function
//             and applies it to every item in an array.
// Exercise 7: Explain the difference between inheritance and composition.
// Exercise 8: Create a class with a static method that validates input.

// --------------------------------------------------
// 11. SUGGESTED SOLUTIONS
// --------------------------------------------------
/*
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        return `${this.name}: $${this.price}`;
    }
}

class DigitalProduct extends Product {
    constructor(name, price, fileSize) {
        super(name, price);
        this.fileSize = fileSize;
    }
}

class Shape {
    getArea() {
        throw new Error("getArea() must be implemented by a subclass.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

function sumTo(number) {
    if (number <= 0) return 0;
    return number + sumTo(number - 1);
}

function transformArray(items, transformer) {
    return items.map(transformer);
}

console.log(new DigitalProduct("E-book", 12, "5 MB").getInfo());
console.log(new Circle(3).getArea());
console.log(new Rectangle(4, 5).getArea());
console.log(sumTo(5));
console.log(transformArray([1, 2, 3], (item) => item ** 2));
*/

// --------------------------------------------------
// FINAL CHALLENGE: MINI INVENTORY SYSTEM
// --------------------------------------------------
// Build an Inventory class that can:
// 1. Add a product.
// 2. Remove a product by ID.
// 3. Find a product by ID.
// 4. Update product quantity.
// 5. Calculate the total inventory value.
// 6. Reject invalid products with meaningful errors.
//
// Suggested product shape:
// { id: 1, name: "Keyboard", price: 50, quantity: 3 }
//
// Try to build it without looking at the suggested solutions above.
