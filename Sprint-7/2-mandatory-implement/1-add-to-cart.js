/**
 * Sprint 7 - Mandatory Implement 1: Add to Cart
 *
 * Implement a function that adds products to a shopping cart.
 *
 * Requirements:
 * - When "Add to Cart" button is clicked, add the product to cart array
 * - Update the cart display to show all items
 * - Calculate and display the total price
 * - Each product has: name (string) and price (number)
 *
 * Use the provided HTML file: add-to-cart.html
 *
 * Example cart array:
 * [
 *   { name: "Laptop", price: 999 },
 *   { name: "Mouse", price: 29 }
 * ]
 *
 * Steps:
 * 1. Select all "Add to Cart" buttons
 * 2. Add click event listeners to each button
 * 3. When clicked, get the product name and price from the button's parent element
 * 4. Add product object to cart array
 * 5. Call updateCartDisplay() to refresh the UI
 */

const cart = [];

function updateCartDisplay() {
  // TODO: Implement cart display update
  // 1. Get the cart-items div
  // 2. Clear its innerHTML
  // 3. Loop through cart array and create HTML for each item
  // 4. Calculate total price
  // 5. Update the total display
}

// TODO: Select all "Add to Cart" buttons

// TODO: Add click event listeners to buttons

// Initialize
updateCartDisplay();
