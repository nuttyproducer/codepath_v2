/**
 * Sprint 10 - Key Exercise 5: Anagram Check
 *
 * Learning objective: String comparison and sorting algorithms
 *
 * Task: Check if two strings are anagrams (contain same letters)
 */

// Examples of anagrams:
// "listen" and "silent"
// "evil" and "vile"
// "a gentleman" and "elegant man"

// TODO: Basic anagram check
function areAnagrams(str1, str2) {
  // Method 1: Sort both strings and compare
  // Method 2: Count letter frequency and compare
}

console.log(areAnagrams("listen", "silent")); // Expected: true
console.log(areAnagrams("hello", "world")); // Expected: false
console.log(areAnagrams("evil", "vile")); // Expected: true

// TODO: Advanced anagram check (ignore spaces and case)
function areAnagramsAdvanced(str1, str2) {
  // 1. Convert to lowercase
  // 2. Remove spaces
  // 3. Check if anagrams
}

console.log(areAnagramsAdvanced("The Eyes", "They See")); // Expected: true
console.log(areAnagramsAdvanced("Hello World", "world hello")); // Expected: true

// Hint: To sort a string:
// str.split("").sort().join("")
