/**
 * Sprint 9 - Key Exercise 2: Throwing Errors
 *
 * Learning objective: Learn to throw custom errors
 *
 * Task: Practice throwing different types of errors
 */

// TODO: Complete the age validation function
function validateAge(age) {
  // Throw an error if:
  // - age is not a number
  // - age is negative
  // - age is greater than 150
  // Otherwise return true
}

try {
  console.log(validateAge(25)); // Expected: true
  console.log(validateAge(-5)); // Should throw error
} catch (error) {
  console.error("Caught:", error.message);
}

// TODO: Create custom error for email validation
function validateEmail(email) {
  if (!email) {
    throw new Error("Email is required");
  }
  if (!email.includes("@")) {
    throw new Error("Invalid email format: missing @");
  }
  if (!email.includes(".")) {
    throw new Error("Invalid email format: missing domain extension");
  }
  return true;
}

// Test the email validator
try {
  validateEmail("test@example.com"); // Should pass
  validateEmail("invalid-email"); // Should throw
} catch (error) {
  console.error("Email error:", error.message);
}
