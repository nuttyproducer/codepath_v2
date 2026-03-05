/**
 * Sprint 9 - Key Exercise 4: Error Propagation
 * 
 * Learning objective: Understand how errors propagate through function calls
 * 
 * Task: Practice error handling at different levels
 */

function levelThree() {
  console.log("Level 3: About to throw error");
  throw new Error("Error from level 3");
}

function levelTwo() {
  console.log("Level 2: Calling level 3");
  levelThree();  // Error will propagate up from here
}

function levelOne() {
  console.log("Level 1: Calling level 2");
  try {
    levelTwo();
  } catch (error) {
    console.log("Caught in level 1:", error.message);
  }
}

levelOne();

// TODO: Modify this chain to catch errors at different levels
function processData(data) {
  // Validate data
  if (!data) {
    throw new Error("No data provided");
  }
  return data;
}

function transformData(data) {
  // Transform could fail
  const processed = processData(data);
  return processed.toUpperCase();  // Will fail if data isn't a string
}

function saveData(data) {
  try {
    const transformed = transformData(data);
    console.log("Saved:", transformed);
    return true;
  } catch (error) {
    console.error("Failed to save:", error.message);
    return false;
  }
}

// Test the chain
saveData("hello");        // Should succeed
saveData(null);           // Should fail at processData
saveData(12345);          // Should fail at transformData
