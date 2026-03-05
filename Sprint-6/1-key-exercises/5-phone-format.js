/**
 * Sprint 6 - Key Exercise 5: Phone Formatting
 *
 * Learning objective: Transform strings into specific formats
 *
 * Task:
 * Format phone numbers into a standard display format.
 */

// Convert various phone formats to (XXX) XXX-XXXX
function formatPhoneNumber(phone) {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  console.log("Input:", phone);
  console.log("Digits only:", digits);

  // Check if we have 10 digits
  if (digits.length !== 10) {
    console.log("Invalid phone number (must be 10 digits)");
    return null;
  }

  // Format as (XXX) XXX-XXXX
  const formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  console.log("Formatted:", formatted);
  console.log("---");

  return formatted;
}

// Test various input formats
formatPhoneNumber("5551234567"); // "5551234567"
formatPhoneNumber("555-123-4567"); // "555-123-4567"
formatPhoneNumber("(555) 123-4567"); // "(555) 123-4567"
formatPhoneNumber("555.123.4567"); // "555.123.4567"
formatPhoneNumber("+1 555 123 4567"); // "+1 555 123 4567"
formatPhoneNumber("123"); // Invalid

// TODO: Format these phone numbers
const phonesToFormat = [
  "1234567890",
  "123-456-7890",
  "+1 (555) 123-4567",
  "555.123.4567",
];

// Bonus challenge: Support international format
// Convert to +1 (XXX) XXX-XXXX for US numbers
function formatInternational(phone) {
  // TODO: Implement international formatting
}

// Bonus challenge: Extract area code
function getAreaCode(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return digits.slice(0, 3);
  }
  return null;
}

console.log("Area code:", getAreaCode("(555) 123-4567")); // "555"
