/**
 * Sprint 9 - Key Exercise 5: Debugging Practice
 *
 * Learning objective: Find and fix bugs in code
 *
 * Task: Each function below has a bug. Find and fix them!
 */

// Bug 1: This function should return the sum of an array
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    // BUG: What's wrong here?
    sum += numbers[i];
  }
  return sum;
}

console.log("Sum:", sumArray([1, 2, 3, 4, 5])); // Expected: 15

// Bug 2: This function should return the first name
function getFirstName(fullName) {
  const names = fullName.split(" ");
  return names[0]; // BUG: What if fullName is null or undefined?
}

console.log("First name:", getFirstName("Alice Johnson")); // Expected: "Alice"
console.log("First name:", getFirstName(null)); // Will crash!

// Bug 3: This function should calculate average
function calculateAverage(numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length; // BUG: What if array is empty?
}

console.log("Average:", calculateAverage([10, 20, 30])); // Expected: 20
console.log("Average:", calculateAverage([])); // Will return NaN!

// Bug 4: This function should find a user by ID
function findUser(users, id) {
  for (let i = 0; i < users.length; i++) {
    if ((users[i].id = id)) {
      // BUG: Wrong operator!
      return users[i];
    }
  }
  return null;
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log("Found:", findUser(users, 2)); // Expected: { id: 2, name: "Bob" }

// TODO: Fix all the bugs above!
