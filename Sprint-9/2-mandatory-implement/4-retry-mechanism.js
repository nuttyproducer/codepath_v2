/**
 * Sprint 9 - Mandatory Implement 4: Retry Failed Operations
 *
 * Implement a retry mechanism for operations that might fail.
 *
 * Requirements:
 * - Accept a function to execute and maximum retry attempts
 * - If the function throws an error, retry up to maxRetries times
 * - Return the result if successful
 * - Throw the last error if all retries fail
 * - Log each retry attempt
 *
 * Example:
 * let attempts = 0;
 * const unreliableFunction = () => {
 *   attempts++;
 *   if (attempts < 3) throw new Error("Failed");
 *   return "Success!";
 * };
 *
 * retry(unreliableFunction, 3) → "Success!" (after 3 attempts)
 * retry(unreliableFunction, 1) → throws Error (not enough retries)
 *
 * Hints:
 * - Use a for loop to attempt execution
 * - Use try-catch inside the loop
 * - Only throw error after all retries exhausted
 */

function retry(fn, maxRetries) {
  // TODO: Implement retry logic
}

// Test cases
console.log("\nTest 1: Succeeds on 3rd attempt");
let attempts1 = 0;
const unreliableOperation1 = () => {
  attempts1++;
  console.log(`  Attempt ${attempts1}`);
  if (attempts1 < 3) {
    throw new Error("Operation failed");
  }
  return "Success!";
};

try {
  const result = retry(unreliableOperation1, 5);
  console.log("Result:", result); // Expected: "Success!"
} catch (error) {
  console.error("Failed:", error.message);
}

console.log("\nTest 2: Fails all attempts");
let attempts2 = 0;
const alwaysFails = () => {
  attempts2++;
  console.log(`  Attempt ${attempts2}`);
  throw new Error("Always fails");
};

try {
  retry(alwaysFails, 3);
} catch (error) {
  console.log("Caught expected error:", error.message); // Expected: error
}

console.log("\nTest 3: Succeeds immediately");
const succeedsImmediately = () => {
  console.log("  Attempt 1");
  return "Instant success!";
};

try {
  const result = retry(succeedsImmediately, 5);
  console.log("Result:", result); // Expected: "Instant success!"
} catch (error) {
  console.error("Failed:", error.message);
}

module.exports = retry;
