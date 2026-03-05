/**
 * Sprint 4 - Mandatory Implement 4: Get Grade Letter
 * 
 * Implement a function that converts numeric grades to letter grades.
 * 
 * Requirements:
 * - Accept a number (0-100)
 * - Return the corresponding letter grade as a string
 * 
 * Grading scale:
 * - 90-100: A
 * - 80-89: B
 * - 70-79: C
 * - 60-69: D
 * - Below 60: F
 * 
 * Example:
 * getGradeLetter(95) → "A"
 * getGradeLetter(82) → "B"
 * getGradeLetter(55) → "F"
 */

function getGradeLetter(grade) {
  // TODO: Implement this function
  
}

// Test cases
console.log(getGradeLetter(95));  // Expected: "A"
console.log(getGradeLetter(100)); // Expected: "A"
console.log(getGradeLetter(85));  // Expected: "B"
console.log(getGradeLetter(78));  // Expected: "C"
console.log(getGradeLetter(65));  // Expected: "D"
console.log(getGradeLetter(50));  // Expected: "F"
console.log(getGradeLetter(0));   // Expected: "F"

// Bonus: Extend this to handle an array of students and add letterGrade property
// Example:
// const studentsWithLetters = students.map(student => ({
//   ...student,
//   letterGrade: getGradeLetter(student.grade)
// }));

module.exports = getGradeLetter;
