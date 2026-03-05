/**
 * Sprint 4 - Key Exercise 3: Count Passing Students
 *
 * Learning objective: Use conditional logic with arrays
 *
 * Task:
 * Given an array of grades, count how many students passed.
 * A passing grade is 60 or higher.
 *
 * Example:
 * grades = [85, 45, 72, 55, 90, 68]
 * Result: 4 students passed (85, 72, 90, 68)
 */

const grades = [85, 45, 72, 55, 90, 68, 78, 50, 88, 35, 92];

let passingCount = 0;

// TODO: Loop through the grades array
// If a grade is >= 60, increment passingCount

console.log(`${passingCount} students passed`);
console.log(`${grades.length - passingCount} students failed`);

// Bonus challenge:
// Calculate the percentage of students who passed
// Hint: (passingCount / grades.length) * 100
