/**
 * Sprint 10 - Key Exercise 3: Palindrome Check
 * 
 * Learning objective: String comparison algorithms
 * 
 * Task: Check if a string is a palindrome (reads same forward and backward)
 */

// TODO: Basic palindrome check (case-sensitive)
function isPalindrome(str) {
  // Compare string with its reverse
  // Or use two pointers from both ends
  
}

console.log(isPalindrome("racecar"));   // Expected: true
console.log(isPalindrome("hello"));     // Expected: false
console.log(isPalindrome("madam"));     // Expected: true

// TODO: Case-insensitive palindrome (ignore spaces and punctuation)
function isPalindromeAdvanced(str) {
  // 1. Convert to lowercase
  // 2. Remove spaces and punctuation
  // 3. Check if palindrome
  
}

console.log(isPalindromeAdvanced("A man a plan a canal Panama"));  // Expected: true
console.log(isPalindromeAdvanced("race a car"));                    // Expected: false
console.log(isPalindromeAdvanced("Was it a car or a cat I saw?"));  // Expected: true

// Hint: To remove non-alphanumeric: str.replace(/[^a-zA-Z0-9]/g, "")
