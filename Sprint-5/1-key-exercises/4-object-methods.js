/**
 * Sprint 5 - Key Exercise 4: Object Methods
 *
 * Learning objective: Add functions to objects and use 'this'
 *
 * Task:
 * Create objects with methods that use the 'this' keyword.
 */

const contact = {
  firstName: "Diana",
  lastName: "Evans",
  email: "diana@example.com",
  phone: "555-0404",

  // Method to get full name
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  // Method to get contact info
  getContactInfo: function () {
    return `${this.getFullName()}: ${this.email}, ${this.phone}`;
  },
};

console.log(contact.getFullName()); // "Diana Evans"
console.log(contact.getContactInfo()); // "Diana Evans: diana@example.com, 555-0404"

// TODO: Add a method called 'call' that returns:
// "Calling [firstName] at [phone]"

// TODO: Add a method called 'sendEmail' that returns:
// "Sending email to [firstName] at [email]"

// Test your methods
// console.log(contact.call());
// console.log(contact.sendEmail());

// Bonus: Create a contact with arrow functions
// Note: Arrow functions don't have their own 'this'
const contact2 = {
  name: "Eve Foster",
  greet: () => {
    return `Hello, I'm ${this.name}`; // This won't work as expected!
  },
};
// console.log(contact2.greet()); // undefined - why?
