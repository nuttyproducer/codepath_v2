# Sprint 5 — Stretch Goal: Contact Manager CRM 💪

Build a complete **Contact Relationship Management (CRM)** system with full CRUD operations.

## Challenge

Implement a `ContactManager` class that manages a collection of contacts with add, read, update, delete, and search functionality.

## Requirements

### Core Features

1. **Add Contact** - Create and store new contacts
2. **Get All Contacts** - Return all contacts
3. **Get Contact By ID** - Find specific contact
4. **Update Contact** - Modify existing contact
5. **Delete Contact** - Remove contact
6. **Search** - Find contacts by name or email
7. **Filter by Category** - Get contacts by category
8. **Export** - Generate report of all contacts

### Data Structure

Each contact should have:
```javascript
{
  id: "unique-id",  // Auto-generated
  name: "Full Name",
  email: "email@example.com",
  phone: "555-0101",
  category: "work" | "personal" | "family",
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: ""
  },
  notes: "",
  createdAt: "2026-03-05T10:30:00",
  updatedAt: "2026-03-05T10:30:00"
}
```

## Implementation

```javascript
class ContactManager {
  constructor() {
    this.contacts = [];
    this.nextId = 1;
  }

  addContact(contactData) {
    // Generate ID, add timestamps, validate, store
  }

  getAllContacts() {
    // Return all contacts
  }

  getContactById(id) {
    // Find and return contact by ID
  }

  updateContact(id, updates) {
    // Update contact, refresh updatedAt timestamp
  }

  deleteContact(id) {
    // Remove contact from array
  }

  searchContacts(term) {
    // Search by name or email
  }

  getContactsByCategory(category) {
    // Filter by category
  }

  exportContacts() {
    // Generate formatted report
  }

  getStats() {
    // Return statistics: total, by category, recent additions
  }
}
```

## Bonus Features

- **Duplicate detection** - Prevent adding contacts with same email
- **Bulk operations** - Add/delete multiple contacts at once
- **Tags system** - Add tags to contacts for flexible categorization
- **Favorites** - Mark contacts as favorites
- **Contact groups** - Organize contacts into groups
- **Import/Export JSON** - Save and load contacts from files
- **Validation** - Comprehensive input validation

## Example Usage

```javascript
const crm = new ContactManager();

// Add contacts
crm.addContact({
  name: "Alice Johnson",
  email: "alice@example.com",
  phone: "555-0101",
  category: "work"
});

// Search
const results = crm.searchContacts("alice");

// Update
crm.updateContact("1", { phone: "555-9999" });

// Get stats
const stats = crm.getStats();
console.log(stats);
// { total: 10, byCategory: { work: 4, personal: 5, family: 1 }, recent: [...] }
```

Good luck! 🚀
