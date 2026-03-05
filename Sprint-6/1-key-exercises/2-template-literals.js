/**
 * Sprint 6 - Key Exercise 2: Template Literals
 * 
 * Learning objective: Build dynamic strings with template literals
 * 
 * Task:
 * Use template literals for cleaner string concatenation.
 */

const firstName = "Alice";
const lastName = "Johnson";
const age = 28;
const city = "Portland";

// Old way (string concatenation)
const greeting1 = "Hello, my name is " + firstName + " " + lastName + ".";
console.log(greeting1);

// New way (template literals)
const greeting2 = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting2);

// Multi-line strings
const bio = `
Name: ${firstName} ${lastName}
Age: ${age}
City: ${city}
`;
console.log(bio);

// TODO: Create an email greeting using template literals
// Format: "Hi [firstName], welcome to [city]! You are [age] years old."



// Expressions in template literals
const price = 19.99;
const quantity = 3;
const total = `Total: $${(price * quantity).toFixed(2)}`;
console.log(total);  // "Total: $59.97"

// TODO: Create a product description
const product = "Laptop";
const originalPrice = 999;
const discount = 0.15;  // 15% off
// Output: "Laptop: Was $999, now $[calculated] (Save $[saved])"



// Conditional logic in template literals
const user = { name: "Bob", isPremium: true };
const message = `Welcome ${user.name}! ${user.isPremium ? "You have premium access" : "Upgrade to premium"}`;
console.log(message);

// TODO: Create a status message
const order = { id: 12345, shipped: false };
// If shipped: "Order #12345 has been shipped"
// If not: "Order #12345 is being processed"


