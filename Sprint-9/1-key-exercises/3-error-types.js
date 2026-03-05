/**
 * Sprint 9 - Key Exercise 3: Error Types
 *
 * Learning objective: Understand different error types
 *
 * Task: Learn about built-in JavaScript error types
 */

// Common JavaScript Errors:

// 1. ReferenceError - Using undefined variable
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("Type:", error.name); // ReferenceError
  console.log("Message:", error.message);
}

// 2. TypeError - Wrong type operation
try {
  const num = 5;
  num.toUpperCase(); // Numbers don't have toUpperCase
} catch (error) {
  console.log("Type:", error.name); // TypeError
}

// 3. SyntaxError - Incorrect syntax (uncomment to see)
// try {
//   eval("const x = ;");  // Invalid syntax
// } catch (error) {
//   console.log("Type:", error.name);    // SyntaxError
// }

// TODO: Write a function that demonstrates each error type
function demonstrateErrors(errorType) {
  try {
    switch (errorType) {
      case "reference":
        // Trigger a ReferenceError

        break;
      case "type":
        // Trigger a TypeError

        break;
      case "range":
        // Trigger a RangeError (hint: invalid array length)

        break;
      default:
        console.log("Unknown error type");
    }
  } catch (error) {
    console.log(`Caught ${error.name}: ${error.message}`);
  }
}

demonstrateErrors("reference");
demonstrateErrors("type");
demonstrateErrors("range");
