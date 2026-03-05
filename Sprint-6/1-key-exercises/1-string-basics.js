/**
 * Sprint 6 - Key Exercise 1: String Basics
 *
 * Learning objective: Master common string methods
 *
 * Task:
 * Practice essential string methods for manipulation.
 */

const email = "  ALICE.JOHNSON@EXAMPLE.COM  ";

// Common string methods
console.log("Original:", email);
console.log("Length:", email.length);
console.log("Lowercase:", email.toLowerCase());
console.log("Uppercase:", email.toUpperCase());
console.log("Trimmed:", email.trim());

// Chaining methods
const cleanEmail = email.trim().toLowerCase();
console.log("Clean email:", cleanEmail);

// TODO: Given this messy input, clean it up
const userInput = "   Bob.SMITH@gmail.COM   ";
// 1. Remove whitespace
// 2. Convert to lowercase
// 3. Store in a variable called cleanedInput

// String searching
const text = "JavaScript is awesome! I love JavaScript.";
console.log("Includes 'Java':", text.includes("Java"));
console.log("Starts with 'Java':", text.startsWith("Java"));
console.log("Ends with 'Script':", text.endsWith("Script"));
console.log("Index of 'awesome':", text.indexOf("awesome"));

// TODO: Check if this sentence includes "password"
const sentence = "Please enter your password to continue";

// String slicing
const fullName = "Alice Johnson";
console.log("First 5 chars:", fullName.slice(0, 5)); // "Alice"
console.log("Last 7 chars:", fullName.slice(-7)); // "Johnson"

// TODO: Extract the first name and last name separately
const name = "Charlie Davis";
// Hint: Use indexOf(" ") to find the space, then slice

// String splitting
const csv = "apple,banana,orange,grape";
const fruits = csv.split(",");
console.log("Fruits array:", fruits);

// TODO: Split this sentence into words
const sentence2 = "The quick brown fox jumps";
