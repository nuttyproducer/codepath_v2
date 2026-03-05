/**
 * Sprint 5 - Mandatory Implement 4: Get Contacts By Category
 * 
 * Implement a function that filters contacts by category.
 * 
 * Requirements:
 * - Accept an array of contacts and a category string
 * - Return array of contacts matching that category
 * - Return empty array if no matches
 * - Category comparison should be case-insensitive
 * 
 * Example:
 * getContactsByCategory(contacts, "work")
 * → [all contacts with category: "work"]
 * 
 * getContactsByCategory(contacts, "WORK")
 * → [same results - case insensitive]
 */

function getContactsByCategory(contacts, category) {
  // TODO: Filter contacts by category (case-insensitive)
  
}

// Test data
const contacts = [
  { name: "Alice", email: "alice@example.com", category: "work" },
  { name: "Bob", email: "bob@example.com", category: "personal" },
  { name: "Charlie", email: "charlie@example.com", category: "family" },
  { name: "Diana", email: "diana@example.com", category: "work" },
  { name: "Eve", email: "eve@example.com", category: "personal" }
];

console.log("Work contacts:", getContactsByCategory(contacts, "work"));
// Expected: Alice, Diana

console.log("Personal contacts:", getContactsByCategory(contacts, "personal"));
// Expected: Bob, Eve

console.log("Family contacts:", getContactsByCategory(contacts, "family"));
// Expected: Charlie

console.log("Case insensitive:", getContactsByCategory(contacts, "WORK"));
// Expected: Alice, Diana

module.exports = getContactsByCategory;
