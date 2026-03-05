/**
 * Sprint 10 - Mandatory Implement 4: Chunk Array
 * 
 * Split an array into chunks of specified size.
 * 
 * Requirements:
 * - Accept an array and chunk size
 * - Return array of arrays (chunks)
 * - Last chunk may be smaller if array length not divisible by size
 * - Handle invalid inputs (size <= 0, empty array)
 * 
 * Examples:
 * chunk([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6], 3) → [[1, 2, 3], [4, 5, 6]]
 * chunk([1, 2, 3], 1) → [[1], [2], [3]]
 * chunk([1, 2, 3], 5) → [[1, 2, 3]] (chunk size larger than array)
 * 
 * Hints:
 * - Use a loop to slice array at intervals
 * - Use array.slice(start, end) to get chunks
 * - Or use a while loop and push chunks
 */

function chunk(array, size) {
  // TODO: Implement array chunking
  
}

// Test cases
console.log(chunk([1, 2, 3, 4, 5], 2));
// Expected: [[1, 2], [3, 4], [5]]

console.log(chunk([1, 2, 3, 4, 5, 6], 3));
// Expected: [[1, 2, 3], [4, 5, 6]]

console.log(chunk([1, 2, 3], 1));
// Expected: [[1], [2], [3]]

console.log(chunk([1, 2, 3], 5));
// Expected: [[1, 2, 3]]

console.log(chunk(["a", "b", "c", "d", "e", "f", "g"], 2));
// Expected: [["a", "b"], ["c", "d"], ["e", "f"], ["g"]]

module.exports = chunk;
