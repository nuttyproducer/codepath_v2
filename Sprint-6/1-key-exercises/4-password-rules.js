/**
 * Sprint 6 - Key Exercise 4: Password Rules
 * 
 * Learning objective: Validate passwords with multiple conditions
 * 
 * Task:
 * Check password strength based on various criteria.
 */

// Password requirements:
// - At least 8 characters long
// - Contains at least one uppercase letter
// - Contains at least one lowercase letter
// - Contains at least one number
// - Contains at least one special character (!@#$%^&*)

function checkPasswordStrength(password) {
  const checks = {
    length: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password)
  };
  
  console.log("Password:", password);
  console.log("Checks:", checks);
  
  const allPassed = Object.values(checks).every(check => check === true);
  console.log("Strong password:", allPassed);
  console.log("---");
  
  return allPassed;
}

// Test passwords
checkPasswordStrength("abc123");           // Weak - too short, no uppercase, no special
checkPasswordStrength("Password123");      // Medium - no special char
checkPasswordStrength("Pass123!");         // Strong - meets all requirements
checkPasswordStrength("VeryLongPassword"); // Medium - no numbers or special

// TODO: Test these passwords and predict which will pass
const passwordsToTest = [
  "weak",
  "StrongPass123!",
  "NoNumbers!",
  "noupppercase123!",
  "NOLOWERCASE123!"
];



// Bonus: Calculate password strength score (0-5)
// Give 1 point for each requirement met
function calculatePasswordScore(password) {
  // TODO: Implement scoring system
}
