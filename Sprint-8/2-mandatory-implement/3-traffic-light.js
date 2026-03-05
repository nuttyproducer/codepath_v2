/**
 * Sprint 8 - Mandatory Implement 3: Traffic Light System
 * 
 * Implement a traffic light state machine.
 * 
 * Requirements:
 * - Accept current light color and return the next color
 * - Traffic light sequence: green → yellow → red → green (repeats)
 * - Return null if current color is invalid
 * 
 * Examples:
 * nextTrafficLight("green") → "yellow"
 * nextTrafficLight("yellow") → "red"
 * nextTrafficLight("red") → "green"
 * nextTrafficLight("blue") → null (invalid color)
 * 
 * Bonus: Add a second function that returns the action:
 * - green: "Go"
 * - yellow: "Slow down"
 * - red: "Stop"
 */

function nextTrafficLight(currentColor) {
  // TODO: Implement traffic light logic
  
}

// Test cases
console.log(nextTrafficLight("green"));    // Expected: "yellow"
console.log(nextTrafficLight("yellow"));   // Expected: "red"
console.log(nextTrafficLight("red"));      // Expected: "green"
console.log(nextTrafficLight("blue"));     // Expected: null

// Bonus function
function getTrafficLightAction(color) {
  // TODO: Return the action for each color
  
}

console.log(getTrafficLightAction("green"));   // Expected: "Go"
console.log(getTrafficLightAction("yellow"));  // Expected: "Slow down"
console.log(getTrafficLightAction("red"));     // Expected: "Stop"

module.exports = { nextTrafficLight, getTrafficLightAction };
