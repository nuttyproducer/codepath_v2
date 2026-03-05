/**
 * Sprint 10 - Mandatory Implement 3: Find Missing Number
 *
 * Find the missing number in a sequence.
 *
 * Requirements:
 * - Accept an array of numbers from 1 to n with one missing
 * - Numbers may be in any order
 * - Return the missing number
 * - Handle edge cases (empty array, no missing number)
 *
 * Examples:
 * findMissing([1, 2, 4, 5, 6]) → 3
 * findMissing([3, 5, 4, 1, 7, 2, 8]) → 6
 * findMissing([2, 3, 4, 5]) → 1
 * findMissing([1, 2, 3, 4, 5]) → null (no missing)
 *
 * Hints:
 * - Sum of 1 to n = n * (n + 1) / 2
 * - Calculate expected sum and actual sum
 * - Difference is the missing number
 * - Or use a Set to track which numbers are present
 */

function findMissing(numbers) {
  // TODO: Implement missing number finder
}

// Test cases
console.log(findMissing([1, 2, 4, 5, 6])); // Expected: 3
console.log(findMissing([3, 5, 4, 1, 7, 2, 8])); // Expected: 6
console.log(findMissing([2, 3, 4, 5])); // Expected: 1
console.log(findMissing([1, 2, 3, 4, 5])); // Expected: null
console.log(findMissing([10, 8, 6, 7, 5, 4, 2, 3, 1])); // Expected: 9

module.exports = findMissing;
