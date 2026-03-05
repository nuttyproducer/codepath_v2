/**
 * Sprint 4 - Mandatory Implement 3: Sort Students By Grade
 *
 * Implement a function that sorts students by their grades.
 *
 * Requirements:
 * - Accept an array of student objects (name, grade)
 * - Accept a second parameter: 'asc' for ascending or 'desc' for descending
 * - Return a NEW sorted array (don't modify the original)
 * - Default to descending (highest grades first) if no order specified
 *
 * Example:
 * sortStudentsByGrade(students, 'desc') → highest grades first
 * sortStudentsByGrade(students, 'asc') → lowest grades first
 */

function sortStudentsByGrade(students, order = "desc") {
  // TODO: Implement this function
  // Hint: Use array.sort() with a comparison function
  // Remember to make a copy first so you don't mutate the original array!
}

// Test cases
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 95 },
  { name: "Eve", grade: 88 },
];

console.log("Sorted descending (highest first):");
console.log(sortStudentsByGrade(students, "desc"));
// Expected order: David (95), Bob (92), Eve (88), Alice (85), Charlie (78)

console.log("\nSorted ascending (lowest first):");
console.log(sortStudentsByGrade(students, "asc"));
// Expected order: Charlie (78), Alice (85), Eve (88), Bob (92), David (95)

console.log("\nOriginal array unchanged:");
console.log(students);

module.exports = sortStudentsByGrade;
