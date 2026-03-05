/**
 * Sprint 5 - Key Exercise 2: Access Properties
 *
 * Learning objective: Use dot notation and bracket notation
 *
 * Task:
 * Practice accessing object properties using both notations.
 */

const contact = {
  name: "Bob Smith",
  email: "bob@example.com",
  phone: "555-0202",
  category: "personal",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "12345",
  },
};

// Dot notation - use when you know the property name
console.log("Name:", contact.name);
console.log("Email:", contact.email);

// Bracket notation - use when property name is dynamic or has special characters
const propertyName = "phone";
console.log("Phone:", contact[propertyName]);

// TODO: Access and log the following using dot notation:
// - category
// - city (nested in address)
// - zipCode (nested in address)

// TODO: Practice bracket notation
// Create a variable called 'field' and set it to "email"
// Then log contact[field]

// Bonus challenge:
// Loop through all properties and log them
// Hint: Use Object.keys() or a for...in loop
