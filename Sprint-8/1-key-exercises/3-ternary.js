/**
 * Sprint 8 - Key Exercise 3: Ternary Operators
 *
 * Learning objective: Use ternary operators for concise conditionals
 *
 * Task: Rewrite if-else statements as ternary operators
 */

// Example: Traditional if-else
function isEvenTraditional(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// TODO: Rewrite using ternary operator
function isEven(num) {
  // Your code here: return (condition) ? "Even" : "Odd";
}

console.log(isEven(4)); // Expected: "Even"
console.log(isEven(7)); // Expected: "Odd"

// TODO: Write a function using ternary to check if someone can vote (age >= 18)
function canVote(age) {
  // Your code here
}

console.log(canVote(20)); // Expected: "Yes"
console.log(canVote(15)); // Expected: "No"

// TODO: Write a ternary to find the maximum of two numbers
function max(a, b) {
  // Your code here
}

console.log(max(10, 5)); // Expected: 10
console.log(max(3, 8)); // Expected: 8
