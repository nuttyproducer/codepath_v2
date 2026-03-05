/**
 * Sprint 10 - Mandatory Implement 1: Two Sum Problem
 * 
 * Implement a function that finds two numbers in an array that add up to a target.
 * 
 * Requirements:
 * - Accept an array of numbers and a target sum
 * - Return indices of the two numbers that add up to target
 * - Return null if no solution exists
 * - Each element can only be used once
 * - Return the first valid pair found
 * 
 * Examples:
 * twoSum([2, 7, 11, 15], 9) → [0, 1] (2 + 7 = 9)
 * twoSum([3, 2, 4], 6) → [1, 2] (2 + 4 = 6)
 * twoSum([3, 3], 6) → [0, 1] (3 + 3 = 6)
 * twoSum([1, 2, 3], 10) → null (no pair sums to 10)
 * 
 * Hints:
 * - Use nested loops to check all pairs
 * - Or use a Map to store seen numbers and their indices
 * - Check if (target - currentNumber) exists in the Map
 */

function twoSum(numbers, target) {
  // TODO: Implement two sum algorithm
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));   // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));        // Expected: [1, 2]
console.log(twoSum([3, 3], 6));           // Expected: [0, 1]
console.log(twoSum([1, 2, 3], 10));       // Expected: null

// Additional test cases
console.log(twoSum([5, 5, 5, 5], 10));    // Expected: [0, 1]
console.log(twoSum([-1, -2, -3, -4, -5], -8));  // Expected: [2, 4] (-3 + -5)

module.exports = twoSum;
