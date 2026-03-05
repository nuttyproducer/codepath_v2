/**
 * Sprint 8 - Mandatory Implement 2: FizzBuzz
 * 
 * Implement the classic FizzBuzz problem.
 * 
 * Requirements:
 * - Accept a number n
 * - Return an array of strings from 1 to n where:
 *   - For multiples of 3, add "Fizz"
 *   - For multiples of 5, add "Buzz"
 *   - For multiples of both 3 and 5, add "FizzBuzz"
 *   - For other numbers, add the number as a string
 * 
 * Example:
 * fizzBuzz(15) → 
 * ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", 
 *  "11", "Fizz", "13", "14", "FizzBuzz"]
 * 
 * Hints:
 * - Use a for loop from 1 to n
 * - Check divisibility using % (modulo) operator
 * - Check for both conditions first (n % 3 === 0 && n % 5 === 0)
 * - Convert numbers to strings: String(num) or num.toString()
 */

function fizzBuzz(n) {
  // TODO: Implement FizzBuzz
  
}

// Test cases
console.log(fizzBuzz(15));
console.log(fizzBuzz(5));   // Expected: ["1", "2", "Fizz", "4", "Buzz"]

module.exports = fizzBuzz;
