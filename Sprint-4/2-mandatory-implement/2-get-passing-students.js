/**
 * Sprint 4 - Mandatory Implement 2: Get Passing Students
 * 
 * Implement a function that returns an array of students who passed.
 * 
 * Requirements:
 * - Accept an array of student objects with name and grade properties
 * - A passing grade is 60 or higher
 * - Return a new array containing only students who passed
 * - Original array should not be modified
 * 
 * Example input:
 * [
 *   { name: "Alice", grade: 85 },
 *   { name: "Bob", grade: 55 },
 *   { name: "Charlie", grade: 72 }
 * ]
 * 
 * Expected output:
 * [
 *   { name: "Alice", grade: 85 },
 *   { name: "Charlie", grade: 72 }
 * ]
 */

function getPassingStudents(students) {
  // TODO: Implement this function using filter()
  
}

// Test cases
const class1 = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 55 },
  { name: "Charlie", grade: 72 },
  { name: "David", grade: 45 },
  { name: "Eve", grade: 90 }
];

const passing = getPassingStudents(class1);
console.log("Passing students:", passing);
// Expected: Alice (85), Charlie (72), Eve (90)

const class2 = [
  { name: "Frank", grade: 50 },
  { name: "Grace", grade: 35 }
];

console.log("Passing students:", getPassingStudents(class2));
// Expected: [] (empty array)

module.exports = getPassingStudents;
