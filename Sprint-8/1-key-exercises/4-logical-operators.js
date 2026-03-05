/**
 * Sprint 8 - Key Exercise 4: Logical Operators
 * 
 * Learning objective: Practice && (AND), || (OR), ! (NOT)
 * 
 * Task: Complete functions using logical operators
 */

// TODO: Check if a number is between 1 and 100 (inclusive)
function isInRange(num) {
  // Use && operator
  
}

console.log(isInRange(50));    // Expected: true
console.log(isInRange(0));     // Expected: false
console.log(isInRange(100));   // Expected: true

// TODO: Check if user has access (must be logged in AND have permission)
function hasAccess(isLoggedIn, hasPermission) {
  // Your code here
  
}

console.log(hasAccess(true, true));    // Expected: true
console.log(hasAccess(true, false));   // Expected: false
console.log(hasAccess(false, true));   // Expected: false

// TODO: Check if it's a weekend (Saturday OR Sunday)
function isWeekend(day) {
  // Use || operator
  
}

console.log(isWeekend("Saturday"));  // Expected: true
console.log(isWeekend("Monday"));    // Expected: false

// TODO: Invert a boolean value
function toggle(value) {
  // Use ! operator
  
}

console.log(toggle(true));   // Expected: false
console.log(toggle(false));  // Expected: true
