/**
 * Sprint 9 - Key Exercise 1: Try-Catch Basics
 *
 * Learning objective: Understand try-catch-finally blocks
 *
 * Task: Complete the error handling examples
 */

// Example: Catching errors
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

console.log(divide(10, 2)); // Expected: 5
console.log(divide(10, 0)); // Expected: Error message, then null

// TODO: Write a function that parses JSON safely
function parseJSON(jsonString) {
  // Use try-catch to handle invalid JSON
  // If valid, return the parsed object
  // If invalid, return null and log the error
}

console.log(parseJSON('{"name": "Alice"}')); // Expected: { name: "Alice" }
console.log(parseJSON("invalid json")); // Expected: Error logged, then null

// TODO: Add finally block
function readFile(filename) {
  console.log("Opening file:", filename);
  try {
    // Simulate file reading
    if (!filename) {
      throw new Error("Filename is required");
    }
    console.log("File read successfully");
  } catch (error) {
    console.error("Error reading file:", error.message);
  } finally {
    // This always runs
    console.log("Closing file");
  }
}

readFile("data.txt");
readFile("");
