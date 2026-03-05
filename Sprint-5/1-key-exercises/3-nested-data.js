/**
 * Sprint 5 - Key Exercise 3: Nested Data
 * 
 * Learning objective: Work with nested objects and arrays
 * 
 * Task:
 * Create and access deeply nested data structures.
 */

const contact = {
  name: "Charlie Davis",
  email: "charlie@example.com",
  phones: [
    { type: "mobile", number: "555-0303" },
    { type: "work", number: "555-0304" },
    { type: "home", number: "555-0305" }
  ],
  address: {
    street: "456 Oak Ave",
    city: "Portland",
    state: "OR",
    zipCode: "97201"
  },
  socialMedia: {
    twitter: "@charlie",
    linkedin: "charlie-davis"
  }
};

// Access nested objects
console.log("City:", contact.address.city);
console.log("Twitter:", contact.socialMedia.twitter);

// Access arrays within objects
console.log("First phone:", contact.phones[0]);
console.log("Mobile number:", contact.phones[0].number);

// TODO: Log the following:
// - Work phone number
// - State
// - LinkedIn handle
// - The entire address object



// TODO: Add a new phone number to the phones array
// { type: "emergency", number: "555-9999" }



// Bonus: Find the mobile phone number using array.find()
// const mobilePhone = contact.phones.find(phone => phone.type === "mobile");
