/**
 * Sprint 8 - Mandatory Implement 4: Filter Adult Users
 *
 * Implement a function that filters users by age.
 *
 * Requirements:
 * - Accept an array of user objects with name and age properties
 * - Return a new array containing only users aged 18 or older
 * - Original array should not be modified
 *
 * Example input:
 * [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 17 },
 *   { name: "Charlie", age: 30 },
 *   { name: "David", age: 16 }
 * ]
 *
 * Expected output:
 * [
 *   { name: "Alice", age: 25 },
 *   { name: "Charlie", age: 30 }
 * ]
 *
 * Hints:
 * - Use the array .filter() method
 * - Filter condition: user.age >= 18
 */

function filterAdultUsers(users) {
  // TODO: Implement adult user filter
}

// Test cases
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 16 },
  { name: "Eve", age: 22 },
  { name: "Frank", age: 15 },
];

const adults = filterAdultUsers(users);
console.log(adults);
// Expected: Alice (25), Charlie (30), Eve (22)

console.log("Original array unchanged:", users.length === 6); // Should be true

module.exports = filterAdultUsers;
