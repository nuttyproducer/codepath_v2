/**
 * Sprint 4 - Key Exercise 2: Find Highest Score
 *
 * Learning objective: Find the maximum value in an array
 *
 * Task:
 * Given an array of test scores, find and log the highest score.
 *
 * Hint: You can use Math.max() with the spread operator (...),
 * or loop through the array to find the maximum.
 */

const testScores = [72, 88, 91, 65, 78, 95, 82, 89];

// Method 1: Using Math.max with spread operator
// const highest = Math.max(...testScores);
// console.log("Highest score:", highest);

// Method 2: Using a loop (try implementing this yourself)
let highest = testScores[0]; // Start with the first score

// TODO: Loop through testScores and update 'highest' if you find a larger value

console.log("Highest score:", highest);

// Test with different arrays:
const moreScores = [45, 67, 89, 23, 91, 100, 76];
// Can you find the highest score in moreScores?
