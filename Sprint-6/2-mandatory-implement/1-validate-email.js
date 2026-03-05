/**
 * Sprint 6 - Mandatory Implement 1: Validate Email
 *
 * Implement a function that validates email addresses.
 *
 * Requirements:
 * - Accept a string (email address) as input
 * - Return true if email format is valid, false otherwise
 * - Valid email must have:
 *   - Characters before the @ symbol
 *   - An @ symbol
 *   - Characters after @ (domain)
 *   - A dot (.) in the domain
 *   - Characters after the dot (extension)
 *
 * Examples:
 * validateEmail("alice@example.com") → true
 * validateEmail("bob.smith@company.co.uk") → true
 * validateEmail("invalid.email") → false (no @ symbol)
 * validateEmail("missing@domain") → false (no dot in domain)
 * validateEmail("@nodomain.com") → false (missing username)
 *
 * Hint: Use a regular expression to match the pattern
 * Pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 */

function validateEmail(email) {
  // TODO: Implement email validation using regex
  // Hint: Create a regex pattern and use .test() method
}

// Test cases
console.log(validateEmail("test@example.com")); // Expected: true
console.log(validateEmail("invalid.email")); // Expected: false
console.log(validateEmail("user@domain.com")); // Expected: true
console.log(validateEmail("@nodomain.com")); // Expected: false
console.log(validateEmail("nodomain@")); // Expected: false

module.exports = validateEmail;
