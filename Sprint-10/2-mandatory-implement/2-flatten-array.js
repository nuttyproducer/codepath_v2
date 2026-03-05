/**
 * Sprint 10 - Mandatory Implement 2: Flatten Nested Array
 *
 * Implement a function that flattens a nested array structure.
 *
 * Requirements:
 * - Accept an array that may contain nested arrays
 * - Return a new flat array with all elements
 * - Handle any level of nesting
 * - Maintain the order of elements
 *
 * Examples:
 * flatten([1, 2, 3]) → [1, 2, 3]
 * flatten([1, [2, 3], 4]) → [1, 2, 3, 4]
 * flatten([1, [2, [3, 4]], 5]) → [1, 2, 3, 4, 5]
 * flatten([[1, 2], [3, 4], [5, 6]]) → [1, 2, 3, 4, 5, 6]
 *
 * Hints:
 * - Use recursion for nested arrays
 * - Check if element is array: Array.isArray(element)
 * - Base case: if not array, add to result
 * - Recursive case: if array, flatten it
 * - Or use Array.flat() and compare your solution
 */

function flatten(arr) {
  // TODO: Implement array flattening
}

// Test cases
console.log(flatten([1, 2, 3])); // Expected: [1, 2, 3]
console.log(flatten([1, [2, 3], 4])); // Expected: [1, 2, 3, 4]
console.log(flatten([1, [2, [3, 4]], 5])); // Expected: [1, 2, 3, 4, 5]
console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // Expected: [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, [3, [4, [5]]]]])); // Expected: [1, 2, 3, 4, 5]

// Mixed types
console.log(flatten([1, ["a", ["b", "c"]], 2])); // Expected: [1, "a", "b", "c", 2]

module.exports = flatten;
