/**
 * Sprint 10 - Key Exercise 1: Linear Search
 *
 * Learning objective: Understand basic search algorithms
 *
 * Task: Implement linear search to find an element in an array
 */

// Linear search checks each element one by one until found
function linearSearch(array, target) {
  // TODO: Loop through array
  // Return the index when target is found
  // Return -1 if not found
}

// Test cases
const numbers = [5, 12, 8, 130, 44, 99, 2];

console.log(linearSearch(numbers, 130)); // Expected: 3
console.log(linearSearch(numbers, 99)); // Expected: 5
console.log(linearSearch(numbers, 7)); // Expected: -1 (not found)

// TODO: Modify to return all indices where target appears
function linearSearchAll(array, target) {
  // Return an array of all indices where target is found
  // Return empty array if not found
}

const duplicates = [5, 12, 8, 12, 44, 12, 2];
console.log(linearSearchAll(duplicates, 12)); // Expected: [1, 3, 5]
