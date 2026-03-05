/**
 * Sprint 5 - Mandatory Implement 1: Create Contact
 *
 * Implement a function that creates a valid contact object.
 *
 * Requirements:
 * - Accept parameters: name, email, phone, category
 * - Validate that all fields are provided (not empty strings)
 * - Category must be one of: "work", "personal", "family"
 * - Return null if validation fails
 * - Return a contact object if valid
 *
 * Example:
 * createContact("Alice", "alice@example.com", "555-0101", "work")
 * → { name: "Alice", email: "alice@example.com", phone: "555-0101", category: "work" }
 *
 * createContact("", "bob@example.com", "555-0202", "personal")
 * → null (name is empty)
 */

function createContact(name, email, phone, category) {
  // TODO: Implement validation and contact creation
}

// Test cases
console.log(createContact("Alice", "alice@example.com", "555-0101", "work"));
// Expected: valid contact object

console.log(createContact("", "bob@example.com", "555-0202", "personal"));
// Expected: null

console.log(
  createContact("Charlie", "charlie@example.com", "555-0303", "friend")
);
// Expected: null (invalid category)

console.log(createContact("Diana", "diana@example.com", "555-0404", "family"));
// Expected: valid contact object

module.exports = createContact;
