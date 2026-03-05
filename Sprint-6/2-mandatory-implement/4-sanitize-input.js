/**
 * Sprint 6 - Mandatory Implement 4: Sanitize Input
 *
 * Implement a function that cleans user input to prevent security issues.
 *
 * Requirements:
 * - Accept a string (user input)
 * - Return cleaned/sanitized string
 *
 * Sanitization steps:
 * 1. Remove leading/trailing whitespace
 * 2. Remove potentially dangerous characters: < > ' "
 *    (these can be used for HTML/JavaScript injection)
 * 3. Normalize multiple spaces to single space
 *
 * Examples:
 * sanitizeInput("  Hello World  ") → "Hello World"
 * sanitizeInput("Hello <script> World") → "Hello script World"
 * sanitizeInput("It's   a   test") → "Its a test"
 * sanitizeInput("  Multiple   Spaces  ") → "Multiple Spaces"
 *
 * Hints:
 * - Use .trim() to remove leading/trailing whitespace
 * - Use .replace(/[<>'"]/g, "") to remove dangerous characters
 * - Use .replace(/\s+/g, " ") to normalize multiple spaces to one
 * - Chain these methods together
 */

function sanitizeInput(input) {
  // TODO: Implement input sanitization
}

// Test cases
console.log(sanitizeInput("  Hello World  ")); // Expected: "Hello World"
console.log(sanitizeInput("Hello <script> World")); // Expected: "Hello script World"
console.log(sanitizeInput("It's   a   test")); // Expected: "Its a test"
console.log(sanitizeInput("  Multiple   Spaces  ")); // Expected: "Multiple Spaces"
console.log(sanitizeInput("<div>Content</div>")); // Expected: "divContent/div"

module.exports = sanitizeInput;
