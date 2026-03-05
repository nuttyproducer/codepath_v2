/**
 * Sprint 6 - Mandatory Implement 3: Format Phone Number
 * 
 * Requirements:
 * - Accept any phone format
 * - Return (XXX) XXX-XXXX format
 * - Return null if invalid
 */

function formatPhoneNumber(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10) return null;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

console.log(formatPhoneNumber("5551234567"));        // (555) 123-4567
console.log(formatPhoneNumber("555-123-4567"));      // (555) 123-4567
console.log(formatPhoneNumber("123"));               // null

module.exports = formatPhoneNumber;
