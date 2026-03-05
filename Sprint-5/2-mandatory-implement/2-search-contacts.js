/**
 * Sprint 5 - Mandatory Implement 2: Search Contacts
 *
 * Implement a function that searches for contacts by name.
 *
 * Requirements:
 * - Accept an array of contact objects and a search term
 * - Return contacts whose name includes the search term (case-insensitive)
 * - Return an empty array if no matches found
 *
 * Example input:
 * contacts = [
 *   { name: "Alice Johnson", email: "alice@example.com", ... },
 *   { name: "Bob Smith", email: "bob@example.com", ... },
 *   { name: "Alice Brown", email: "alice.b@example.com", ... }
 * ]
 *
 * searchContacts(contacts, "alice")
 * → [
 *     { name: "Alice Johnson", ... },
 *     { name: "Alice Brown", ... }
 *   ]
 *
 * searchContacts(contacts, "johnson")
 * → [{ name: "Alice Johnson", ... }]
 */

function searchContacts(contacts, searchTerm) {
  // TODO: Implement case-insensitive search
}

// Test data
const contacts = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-0101",
    category: "work",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "555-0202",
    category: "personal",
  },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone: "555-0303",
    category: "family",
  },
  {
    name: "Alice Brown",
    email: "alice.b@example.com",
    phone: "555-0404",
    category: "work",
  },
];

console.log("Search 'alice':", searchContacts(contacts, "alice"));
// Expected: 2 results (Alice Johnson, Alice Brown)

console.log("Search 'smith':", searchContacts(contacts, "smith"));
// Expected: 1 result (Bob Smith)

console.log("Search 'xyz':", searchContacts(contacts, "xyz"));
// Expected: [] (empty array)

module.exports = searchContacts;
