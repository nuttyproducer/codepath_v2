/**
 * Sprint 7 - Mandatory Implement 3: Form Validation
 *
 * Implement client-side form validation with error messages.
 *
 * Requirements:
 * - Validate form fields when user submits the form
 * - Display specific error messages for each invalid field
 * - Prevent form submission if any field is invalid
 * - Clear previous error messages before validating
 *
 * Validation rules:
 * - Name: Required, minimum 2 characters
 * - Email: Required, must contain @ symbol
 * - Password: Required, minimum 8 characters
 * - Confirm Password: Must match password
 *
 * Use the provided HTML file: form-validation.html
 */

function validateForm(event) {
  // TODO: Prevent default form submission

  // TODO: Clear all previous error messages
  // Select all elements with class "error-message" and set innerHTML to ""

  // TODO: Get values from all input fields
  const name = null;
  const email = null;
  const password = null;
  const confirmPassword = null;

  let isValid = true;

  // TODO: Validate name
  // If empty or less than 2 characters, display error

  // TODO: Validate email
  // If empty or doesn't contain @, display error

  // TODO: Validate password
  // If empty or less than 8 characters, display error

  // TODO: Validate confirm password
  // If doesn't match password, display error

  // TODO: If isValid is true, show success message
  // Otherwise, do nothing (errors are already displayed)
}

// TODO: Select the form and add submit event listener
