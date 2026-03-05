/**
 * Sprint 7 - Mandatory Implement 2: Filter Products
 * 
 * Implement product filtering by category.
 * 
 * Requirements:
 * - Display all products initially
 * - When a category button is clicked, show only products from that category
 * - "All" button should show all products
 * - Hide products that don't match the selected category
 * 
 * Use the provided HTML file: filter-products.html
 * 
 * Hints:
 * - Each product has a data-category attribute
 * - Use element.style.display = "none" to hide
 * - Use element.style.display = "block" to show
 * - Select all product elements and all filter buttons
 */

function filterProducts(category) {
  // TODO: Implement product filtering
  // 1. Select all product elements (class "product-item")
  // 2. Loop through each product
  // 3. Get the product's data-category attribute
  // 4. If category is "all" OR matches the product's category, show it
  // 5. Otherwise, hide it
  
}

// TODO: Select all filter buttons


// TODO: Add click event listeners to each button
// When clicked:
// 1. Get the data-category attribute from the button
// 2. Call filterProducts() with that category
// 3. Update button styles to show which is active

// Initialize: Show all products
filterProducts("all");
