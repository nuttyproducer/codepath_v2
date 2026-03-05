/**
 * Sprint 5 - Stretch Challenge: Contact Manager CRM
 * 
 * Build a complete CRM system with full CRUD operations.
 * See README.md for full requirements.
 */

class ContactManager {
  constructor() {
    this.contacts = [];
    this.nextId = 1;
  }

  addContact(contactData) {
    // TODO: Implement add contact
    // - Generate unique ID
    // - Add createdAt and updatedAt timestamps
    // - Validate required fields
    // - Add to contacts array
  }

  getAllContacts() {
    // TODO: Return all contacts
  }

  getContactById(id) {
    // TODO: Find and return contact by ID
  }

  updateContact(id, updates) {
    // TODO: Update contact
    // - Find contact by ID
    // - Merge updates
    // - Update updatedAt timestamp
  }

  deleteContact(id) {
    // TODO: Remove contact from array
  }

  searchContacts(term) {
    // TODO: Search by name or email
  }

  getContactsByCategory(category) {
    // TODO: Filter by category
  }

  exportContacts() {
    // TODO: Generate formatted report
    // Example format:
    // "Contact List (10 total)\n" +
    // "==================\n" +
    // "1. Alice Johnson (work) - alice@example.com\n" +
    // "2. Bob Smith (personal) - bob@example.com\n"
  }

  getStats() {
    // TODO: Return statistics object
    // {
    //   total: 10,
    //   byCategory: { work: 4, personal: 5, family: 1 },
    //   recent: [/* last 5 added contacts */]
    // }
  }
}

// Test your implementation
const crm = new ContactManager();

crm.addContact({
  name: "Alice Johnson",
  email: "alice@example.com",
  phone: "555-0101",
  category: "work"
});

crm.addContact({
  name: "Bob Smith",
  email: "bob@example.com",
  phone: "555-0202",
  category: "personal"
});

console.log("All contacts:", crm.getAllContacts());
console.log("Search 'alice':", crm.searchContacts("alice"));
console.log("Work contacts:", crm.getContactsByCategory("work"));
console.log("Stats:", crm.getStats());

module.exports = ContactManager;
