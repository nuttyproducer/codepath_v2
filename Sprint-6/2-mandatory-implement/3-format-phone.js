/**
 * Sprint 6 - Mandatory Implement 3: Format Phone Number
 *
 * Implement a function that formats phone numbers consistently.
 *
 * Requirements:
 * - Accept a string (phone number in any format)
 * - Return formatted as: (XXX) XXX-XXXX
 * - Return null if the phone number is invalid (not 10 digits)
 *
 * Input formats to handle:
 * - "5551234567" → "(555) 123-4567"
 * - "555-123-4567" → "(555) 123-4567"
 * - "(555) 123-4567" → "(555) 123-4567"
 * - "555.123.4567" → "(555) 123-4567"
 * - "+1 555 123 4567" → "(555) 123-4567"
 * - "123" → null (too short)
 *
 * Steps:
 * 1. Remove all non-digit characters (keep only 0-9)
 * 2. Check if result has exactly 10 digits
 * 3. Format as (XXX) XXX-XXXX
 *
 * Hints:
 * - Use .replace(/\D/g, "") to remove non-digits
 * - Use .slice() to extract parts: area code (0-3), prefix (3-6), line (6-10)
 * - Use template literals to format
 */

function formatPhoneNumber(phone) {
  // TODO: Implement phone number formatting
}

// Test cases
console.log(formatPhoneNumber("5551234567")); // Expected: "(555) 123-4567"
console.log(formatPhoneNumber("555-123-4567")); // Expected: "(555) 123-4567"
console.log(formatPhoneNumber("(555) 123-4567")); // Expected: "(555) 123-4567"
console.log(formatPhoneNumber("555.123.4567")); // Expected: "(555) 123-4567"
console.log(formatPhoneNumber("123")); // Expected: null
console.log(formatPhoneNumber("12345678901")); // Expected: null (too long)

module.exports = formatPhoneNumber;
