/**
 * Sprint 9 - Mandatory Implement 2: Validate User Registration
 * 
 * Implement user registration validation with detailed error messages.
 * 
 * Requirements:
 * - Accept user object with: username, email, password, age
 * - Validation rules:
 *   - username: required, 3-20 characters, alphanumeric only
 *   - email: required, must contain @ and .
 *   - password: required, minimum 8 characters
 *   - age: required, must be >= 13
 * - Throw specific error for each validation failure
 * - Return true if all validations pass
 * 
 * Examples:
 * validateUser({ username: "alice", email: "alice@test.com", password: "pass1234", age: 25 })
 * → true
 * 
 * validateUser({ username: "ab", email: "alice@test.com", password: "pass1234", age: 25 })
 * → throw Error("Username must be between 3-20 characters")
 * 
 * Hints:
 * - Check each field one by one
 * - Throw error immediately when validation fails
 * - Use regex for username: /^[a-zA-Z0-9]+$/
 */

function validateUser(user) {
  // TODO: Implement comprehensive user validation
  
}

// Test cases
try {
  console.log(validateUser({
    username: "alice123",
    email: "alice@test.com",
    password: "password123",
    age: 25
  }));
  console.log("✓ Valid user");
} catch (error) {
  console.error("✗", error.message);
}

try {
  validateUser({
    username: "ab",  // Too short
    email: "alice@test.com",
    password: "password123",
    age: 25
  });
} catch (error) {
  console.error("✓ Caught expected error:", error.message);
}

try {
  validateUser({
    username: "alice",
    email: "invalid-email",  // No @
    password: "password123",
    age: 25
  });
} catch (error) {
  console.error("✓ Caught expected error:", error.message);
}

try {
  validateUser({
    username: "alice",
    email: "alice@test.com",
    password: "short",  // Too short
    age: 25
  });
} catch (error) {
  console.error("✓ Caught expected error:", error.message);
}

try {
  validateUser({
    username: "alice",
    email: "alice@test.com",
    password: "password123",
    age: 10  // Too young
  });
} catch (error) {
  console.error("✓ Caught expected error:", error.message);
}

module.exports = validateUser;
