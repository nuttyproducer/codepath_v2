/**
 * Sprint 6 - Mandatory Implement 1: Validate Email
 * 
 * Requirements:
 * - Check if email format is valid
 * - Return true/false
 * - Must have @ symbol and domain extension
 */

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Test
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid.email")); // false

module.exports = validateEmail;
