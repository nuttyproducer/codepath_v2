/**
 * Sprint 9 - Mandatory Implement 1: Safe Calculator
 * 
 * Implement a calculator with proper error handling.
 * 
 * Requirements:
 * - Accept: two numbers and an operator (+, -, *, /)
 * - Handle division by zero
 * - Handle invalid operators
 * - Handle non-numeric inputs
 * - Return the result or throw descriptive errors
 * 
 * Examples:
 * calculate(10, 5, "+") → 15
 * calculate(10, 5, "/") → 2
 * calculate(10, 0, "/") → throw Error("Division by zero")
 * calculate(10, 5, "%") → throw Error("Invalid operator")
 * calculate("ten", 5, "+") → throw Error("Invalid input: not a number")
 * 
 * Hints:
 * - Use typeof to check if inputs are numbers
 * - Use switch statement for operations
 * - Throw specific errors for each invalid case
 */

function calculate(a, b, operator) {
  // TODO: Implement safe calculator with error handling
  
}

// Test cases (wrap in try-catch)
try {
  console.log(calculate(10, 5, "+"));    // Expected: 15
  console.log(calculate(10, 5, "-"));    // Expected: 5
  console.log(calculate(10, 5, "*"));    // Expected: 50
  console.log(calculate(10, 5, "/"));    // Expected: 2
  console.log(calculate(10, 0, "/"));    // Should throw error
} catch (error) {
  console.error("Error:", error.message);
}

try {
  console.log(calculate(10, 5, "%"));    // Should throw error
} catch (error) {
  console.error("Error:", error.message);
}

try {
  console.log(calculate("ten", 5, "+"));  // Should throw error
} catch (error) {
  console.error("Error:", error.message);
}

module.exports = calculate;
