/**
 * Sprint 4 - Key Exercise 4: Filter Array
 * 
 * Learning objective: Use the filter() method
 * 
 * Task:
 * Given an array of all grades, create a new array containing only
 * the failing grades (below 60).
 * 
 * Learn to use: array.filter()
 */

const allGrades = [85, 45, 72, 55, 90, 68, 78, 50, 88, 35, 92, 58];

// TODO: Use the filter() method to create an array of failing grades
// Hint: array.filter((grade) => { return /* condition */ })

const failingGrades = []; // Replace this with your filter logic

console.log("Failing grades:", failingGrades);
console.log("Number of failing grades:", failingGrades.length);

// Bonus: Create another array with only grades above 85 (excellent)
// const excellentGrades = allGrades.filter(/* your code here */);


// Additional challenge:
// Filter the grades into three categories: failing, passing, excellent
// failing: < 60
// passing: 60-84
// excellent: >= 85
