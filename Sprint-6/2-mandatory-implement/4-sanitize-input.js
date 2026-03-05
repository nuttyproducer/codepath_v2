/**
 * Sprint 6 - Mandatory Implement 4: Sanitize Input
 * 
 * Requirements:
 * - Remove dangerous characters
 * - Trim whitespace
 * - Convert to safe format
 */

function sanitizeInput(input) {
  return input
    .trim()
    .replace(/[<>'"]/g, "")  // Remove HTML/JS injection chars
    .replace(/\s+/g, " ");    // Normalize whitespace
}

console.log(sanitizeInput("  Hello <script>  World  "));  // "Hello script World"
console.log(sanitizeInput("Safe   Input"));                // "Safe Input"

module.exports = sanitizeInput;
