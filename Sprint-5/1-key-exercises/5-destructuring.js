/**
 * Sprint 5 - Key Exercise 5: Destructuring & Spread
 * 
 * Learning objective: Use destructuring and spread operator
 * 
 * Task:
 * Extract values from objects cleanly and merge objects.
 */

const contact = {
  name: "Frank Garcia",
  email: "frank@example.com",
  phone: "555-0505",
  category: "work",
  company: "Tech Corp"
};

// Destructuring - extract values into variables
const { name, email } = contact;
console.log(name);  // "Frank Garcia"
console.log(email); // "frank@example.com"

// Destructuring with renaming
const { phone: phoneNumber } = contact;
console.log(phoneNumber); // "555-0505"

// TODO: Destructure to extract category and company



// Spread operator - copy and merge objects
const contactCopy = { ...contact };
console.log("Copy:", contactCopy);

// Add new properties while copying
const contactWithNote = {
  ...contact,
  note: "Important client",
  lastContacted: "2026-03-05"
};
console.log("With note:", contactWithNote);

// TODO: Create a new object that:
// 1. Spreads all properties from contact
// 2. Overrides the category to "personal"
// 3. Adds a new property 'favorite' set to true



// Merge two objects
const additionalInfo = {
  address: "789 Pine St",
  birthday: "1990-05-15"
};

const fullContact = { ...contact, ...additionalInfo };
console.log("Full contact:", fullContact);

// Bonus: Destructuring in function parameters
function printContact({ name, email, phone }) {
  console.log(`${name}: ${email}, ${phone}`);
}

printContact(contact);
