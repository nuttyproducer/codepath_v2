/**
 * Sprint 6 - Key Exercise 3: Email Validation
 *
 * Learning objective: Use regular expressions for pattern matching
 *
 * Task:
 * Validate email addresses using regex.
 */

// Basic email regex pattern
// Format: something@something.something
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Testing emails
console.log(emailRegex.test("alice@example.com")); // true
console.log(emailRegex.test("bob.smith@company.org")); // true
console.log(emailRegex.test("invalid.email")); // false
console.log(emailRegex.test("missing@domain")); // false
console.log(emailRegex.test("@missingname.com")); // false

// Breaking down the regex:
// ^          - Start of string
// [^\s@]+    - One or more characters that are NOT whitespace or @
// @          - Literal @ symbol
// [^\s@]+    - One or more characters that are NOT whitespace or @
// \.         - Literal dot (escaped)
// [^\s@]+    - One or more characters that are NOT whitespace or @
// $          - End of string

// TODO: Test these emails and explain why each passes or fails
const testEmails = [
  "user@domain.com",
  "first.last@company.co.uk",
  "nodomain@",
  "spaces in@email.com",
  "multiple@@symbols.com",
];

// Loop through and test each one

// String methods with regex
const email = "contact@example.com";
console.log(email.match(/@(.+)\./)); // Extract domain
console.log(email.replace(/@.+/, "@hidden.com")); // Hide domain

// TODO: Extract the username (part before @) from an email
const fullEmail = "alice.johnson@company.com";
// Hint: Use match() or split()

// More regex methods
console.log("Check contains @:", /@/.test("test@email.com"));
console.log("Find @ position:", "test@email.com".search(/@/));
