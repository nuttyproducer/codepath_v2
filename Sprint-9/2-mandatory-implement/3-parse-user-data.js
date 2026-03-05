/**
 * Sprint 9 - Mandatory Implement 3: Parse User Data
 * 
 * Safely parse and process user data with error recovery.
 * 
 * Requirements:
 * - Accept a JSON string containing user data
 * - Parse the JSON safely (handle invalid JSON)
 * - Validate required fields (id, name, email)
 * - Return processed user object or null if errors occur
 * - Log errors but don't throw them (graceful error handling)
 * 
 * Example valid input:
 * '{"id": 1, "name": "Alice", "email": "alice@test.com"}'
 * → { id: 1, name: "Alice", email: "alice@test.com" }
 * 
 * Example invalid inputs:
 * 'invalid json' → null (logs parse error)
 * '{"id": 1}' → null (missing required fields)
 * 
 * Hints:
 * - Use try-catch for JSON.parse
 * - Check for required fields after parsing
 * - Return null instead of throwing errors (graceful degradation)
 */

function parseUserData(jsonString) {
  // TODO: Implement safe JSON parsing with validation
  
}

// Test cases
console.log("\nTest 1: Valid data");
const result1 = parseUserData('{"id": 1, "name": "Alice", "email": "alice@test.com"}');
console.log("Result:", result1);

console.log("\nTest 2: Invalid JSON");
const result2 = parseUserData('invalid json string');
console.log("Result:", result2);  // Expected: null

console.log("\nTest 3: Missing required fields");
const result3 = parseUserData('{"id": 1, "name": "Bob"}');
console.log("Result:", result3);  // Expected: null

console.log("\nTest 4: Extra fields (should still work)");
const result4 = parseUserData('{"id": 2, "name": "Charlie", "email": "charlie@test.com", "age": 30}');
console.log("Result:", result4);  // Expected: valid object

module.exports = parseUserData;
