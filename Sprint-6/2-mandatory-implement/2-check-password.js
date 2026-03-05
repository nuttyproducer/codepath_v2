/**
 * Sprint 6 - Mandatory Implement 2: Check Password Strength
 * 
 * Requirements:
 * - Return "weak", "medium", or "strong"
 * - Weak: < 8 chars
 * - Medium: >= 8 chars, missing some requirements
 * - Strong: >= 8 chars + uppercase + lowercase + number + special char
 */

function checkPasswordStrength(password) {
  if (password.length < 8) return "weak";
  
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  
  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  
  if (score === 4) return "strong";
  if (score >= 2) return "medium";
  return "weak";
}

console.log(checkPasswordStrength("abc"));          // weak
console.log(checkPasswordStrength("Password"));     // medium
console.log(checkPasswordStrength("Pass123!"));     // strong

module.exports = checkPasswordStrength;
