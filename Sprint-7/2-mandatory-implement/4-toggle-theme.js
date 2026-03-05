/**
 * Sprint 7 - Mandatory Implement 4: Toggle Theme
 * 
 * Implement a dark/light theme toggle.
 * 
 * Requirements:
 * - When toggle button is clicked, switch between light and dark themes
 * - Apply CSS classes to body element: "light-theme" or "dark-theme"
 * - Update button text to show current mode
 * - Save theme preference to localStorage
 * - Load saved theme on page load
 * 
 * Use the provided HTML file: toggle-theme.html
 * 
 * localStorage hints:
 * - Save: localStorage.setItem("theme", "dark")
 * - Load: localStorage.getItem("theme")
 */

let currentTheme = "light";

function applyTheme(theme) {
  // TODO: Apply theme by adding/removing CSS classes from body
  // 1. Remove both "light-theme" and "dark-theme" classes
  // 2. Add the appropriate class based on theme parameter
  // 3. Update the toggle button text
  
}

function toggleTheme() {
  // TODO: Toggle between light and dark themes
  // 1. If currentTheme is "light", change to "dark"
  // 2. If currentTheme is "dark", change to "light"
  // 3. Call applyTheme() with the new theme
  // 4. Save the theme to localStorage
  
}

// TODO: On page load, check localStorage for saved theme
// If found, use it; otherwise default to "light"


// TODO: Select the toggle button and add click event listener


// Apply initial theme
applyTheme(currentTheme);
