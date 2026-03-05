/**
 * Sprint 6 - Mandatory Implement 2: Check Password Strength
 *
 * Implement a function that evaluates password strength.
 *
 * Requirements:
 * - Accept a string (password) as input
 * - Return "weak", "medium", or "strong"
 *
 * Password strength rules:
 * - "weak": Less than 8 characters
 * - "medium": 8+ characters but missing some requirements
 * - "strong": 8+ characters AND has:
 *   - At least one uppercase letter (A-Z)
 *   - At least one lowercase letter (a-z)
 *   - At least one number (0-9)
 *   - At least one special character (!@#$%^&*)
 *
 * Examples:
 * checkPasswordStrength("abc") → "weak"
 * checkPasswordStrength("password") → "medium" (no uppercase, number, special)
 * checkPasswordStrength("Password") → "medium" (no number, special)
 * checkPasswordStrength("Pass123!") → "strong" (meets all requirements)
 *
 * Hints:
 * - Check length first
 * - Use regex to test for character types: /[A-Z]/, /[a-z]/, /[0-9]/, /[!@#$%^&*]/
 * - Count how many requirements are met
 */

function checkPasswordStrength(password) {
  // TODO: Implement password strength checker
}

// Test cases
console.log(checkPasswordStrength("abc")); // Expected: "weak"
console.log(checkPasswordStrength("password")); // Expected: "medium"
console.log(checkPasswordStrength("Password")); // Expected: "medium"
console.log(checkPasswordStrength("Pass123!")); // Expected: "strong"
console.log(checkPasswordStrength("VeryLongPassword")); // Expected: "medium"

module.exports = checkPasswordStrength;
