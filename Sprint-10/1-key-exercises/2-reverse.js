/**
 * Sprint 10 - Key Exercise 2: Reverse String/Array
 * 
 * Learning objective: Practice array manipulation algorithms
 * 
 * Task: Reverse strings and arrays without using built-in reverse()
 */

// TODO: Reverse a string
function reverseString(str) {
  // Method 1: Convert to array, loop backward
  // Method 2: Use a for loop from end to start
  
}

console.log(reverseString("hello"));       // Expected: "olleh"
console.log(reverseString("JavaScript"));  // Expected: "tpircSavaJ"

// TODO: Reverse an array (without using .reverse())
function reverseArray(arr) {
  // Create a new array, add elements from end to start
  
}

console.log(reverseArray([1, 2, 3, 4, 5]));  // Expected: [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"]));  // Expected: ["c", "b", "a"]

// TODO: Reverse in place (modify the original array)
function reverseInPlace(arr) {
  // Swap elements: first with last, second with second-to-last, etc.
  // Use two pointers: start and end
  
}

const original = [1, 2, 3, 4, 5];
reverseInPlace(original);
console.log(original);  // Expected: [5, 4, 3, 2, 1]
