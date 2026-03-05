/**
 * Sprint 8 - Mandatory Implement 1: Discount Calculator
 *
 * Implement a function that calculates the final price after applying discounts.
 *
 * Requirements:
 * - Accept: price (number), customerType (string)
 * - Customer types: "regular", "vip", "employee"
 * - Discount rates:
 *   - regular: 0% (no discount)
 *   - vip: 10% discount
 *   - employee: 20% discount
 * - Return the final price rounded to 2 decimal places
 * - Return null if customerType is invalid
 *
 * Examples:
 * calculatePrice(100, "regular") → 100
 * calculatePrice(100, "vip") → 90
 * calculatePrice(100, "employee") → 80
 * calculatePrice(100, "student") → null (invalid type)
 *
 * Hints:
 * - Use if-else or switch statement
 * - Calculate discount: price * (1 - discountRate)
 * - Use .toFixed(2) to round to 2 decimals, then convert back to number
 */

function calculatePrice(price, customerType) {
  // TODO: Implement discount calculation
}

// Test cases
console.log(calculatePrice(100, "regular")); // Expected: 100
console.log(calculatePrice(100, "vip")); // Expected: 90
console.log(calculatePrice(100, "employee")); // Expected: 80
console.log(calculatePrice(50, "vip")); // Expected: 45
console.log(calculatePrice(100, "student")); // Expected: null

module.exports = calculatePrice;
