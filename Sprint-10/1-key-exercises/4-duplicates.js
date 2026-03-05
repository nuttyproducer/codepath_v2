/**
 * Sprint 10 - Key Exercise 4: Find Duplicates
 *
 * Learning objective: Array analysis algorithms
 *
 * Task: Find duplicate elements in an array
 */

// TODO: Find if any duplicates exist
function hasDuplicates(arr) {
  // Method 1: Use Set (Set removes duplicates)
  // Method 2: Use nested loops to compare each element
}

console.log(hasDuplicates([1, 2, 3, 4, 5])); // Expected: false
console.log(hasDuplicates([1, 2, 3, 4, 2])); // Expected: true
console.log(hasDuplicates(["a", "b", "c"])); // Expected: false
console.log(hasDuplicates(["a", "b", "a"])); // Expected: true

// TODO: Return array of duplicate elements
function findDuplicates(arr) {
  // 1. Count occurrences of each element
  // 2. Return elements that appear more than once
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // Expected: [2, 1] or [1, 2]
console.log(findDuplicates([1, 2, 3, 4, 5])); // Expected: []

// TODO: Count occurrences of each element
function countOccurrences(arr) {
  // Return an object with element: count pairs
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3]));
// Expected: { 1: 1, 2: 2, 3: 3 }
