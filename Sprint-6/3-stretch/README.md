# Sprint 6 — Stretch Goal: Form Validation Library 💪

Build a complete form validation library with comprehensive rules.

## Challenge

Create a `FormValidator` class that validates multiple fields with custom rules and provides detailed error messages.

## Example Usage

```javascript
const validator = new FormValidator();

validator.addField("email", {
  required: true,
  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Please enter a valid email"
});

validator.addField("password", {
  required: true,
  minLength: 8,
  pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
  message: "Password must be 8+ chars with uppercase, lowercase, number, and special char"
});

const formData = {
  email: "test@example.com",
  password: "weak"
};

const result = validator.validate(formData);
// { valid: false, errors: { password: "Password must be 8+ chars..." } }
```

Good luck! 🚀
