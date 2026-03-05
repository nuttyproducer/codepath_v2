/**
 * Sprint 8 - Key Exercise 2: Switch Statements
 * 
 * Learning objective: Practice switch statements for multiple conditions
 * 
 * Task: Complete the day of week function
 */

function getDayType(day) {
  // TODO: Use a switch statement to return:
  // - "Weekend" for "Saturday" or "Sunday"
  // - "Weekday" for Monday through Friday
  // - "Invalid day" for anything else
  
  switch (day) {
    // Your cases here
    
    default:
      return "Invalid day";
  }
}

// Test cases
console.log(getDayType("Monday"));    // Expected: "Weekday"
console.log(getDayType("Saturday"));  // Expected: "Weekend"
console.log(getDayType("Friday"));    // Expected: "Weekday"
console.log(getDayType("Holiday"));   // Expected: "Invalid day"

// TODO: Write a switch statement for traffic light actions
function trafficLight(color) {
  // Return: "Go" for green, "Slow down" for yellow, "Stop" for red
  
}

console.log(trafficLight("green"));   // Expected: "Go"
console.log(trafficLight("yellow"));  // Expected: "Slow down"
console.log(trafficLight("red"));     // Expected: "Stop"
