/**
 * Sprint 5 - Mandatory Implement 3: Update Contact
 * 
 * Implement a function that updates a contact's information.
 * 
 * Requirements:
 * - Accept a contact object and an updates object
 * - Merge the updates into the contact
 * - Return a NEW contact object (don't mutate the original)
 * - Only update properties that exist in the updates object
 * 
 * Example:
 * const contact = { name: "Alice", email: "alice@example.com", phone: "555-0101" };
 * const updates = { email: "alice.new@example.com", category: "work" };
 * 
 * updateContact(contact, updates)
 * → { name: "Alice", email: "alice.new@example.com", phone: "555-0101", category: "work" }
 * 
 * Original contact should remain unchanged!
 */

function updateContact(contact, updates) {
  // TODO: Merge updates into contact without mutating original
  // Hint: Use the spread operator
  
}

// Test cases
const original = {
  name: "Alice Johnson",
  email: "alice@example.com",
  phone: "555-0101",
  category: "work"
};

const updated = updateContact(original, {
  email: "alice.new@example.com",
  phone: "555-9999"
});

console.log("Updated contact:", updated);
// Expected: email and phone changed

console.log("Original unchanged:", original);
// Expected: original contact remains the same

const withNewProp = updateContact(original, {
  category: "personal",
  note: "Important client"
});

console.log("With new property:", withNewProp);
// Expected: category updated, note added

module.exports = updateContact;
