/**
 * Sprint 4 - Key Exercise 5: Calculate Average
 * 
 * Learning objective: Use reduce() to calculate totals
 * 
 * Task:
 * Calculate the average grade for a class.
 * 
 * Learn to use: array.reduce()
 */

const classGrades = [78, 85, 92, 88, 76, 95, 82];

// Step 1: Calculate the sum using reduce()
// reduce takes two parameters: (accumulator, currentValue)
// The accumulator stores the running total

// TODO: Use reduce to sum all grades
const sum = 0; // Replace with reduce logic
// Hint: classGrades.reduce((total, grade) => total + grade, 0)


console.log("Sum of all grades:", sum);

// Step 2: Calculate the average
const average = 0; // Divide sum by number of grades

console.log("Class average:", average.toFixed(2));

// Bonus challenge:
// Calculate the average in a single reduce operation
// Hint: You'll need to handle the final division differently
