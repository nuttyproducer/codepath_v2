# 🧭 Guide to Sprint 4 — Arrays

> [!TIP]
> You should always do the prep work _before_ attempting the coursework.
> The prep shows you _how_ to do the coursework.
> There is often a step by step video you can code along with too.
> Do the prep.

## Overview

In this sprint, you'll master **JavaScript arrays** through a real-world scenario: building a **student grade tracking system**. You'll learn array fundamentals, iteration methods, and higher-order functions like `map`, `filter`, and `reduce`.

**Real-world application:** Systems like Google Classroom, Canvas, and any Learning Management System (LMS) use these concepts to process student data.

## Learning Objectives

By the end of this sprint, you will be able to:

- ✅ Create and manipulate arrays
- ✅ Access and modify array elements
- ✅ Loop through arrays using `for`, `for...of`, and `forEach`
- ✅ Use array methods: `push`, `pop`, `shift`, `unshift`, `slice`, `splice`
- ✅ Filter arrays with conditional logic
- ✅ Transform arrays using `map`
- ✅ Calculate totals using `reduce`
- ✅ Sort arrays by different criteria
- ✅ Work with arrays of objects

## Structure

### 1. Key Exercises (`1-key-exercises/`)

Short, focused exercises to build your understanding of array fundamentals:

1. **Loop through grades** - Basic iteration
2. **Find highest score** - Using `Math.max` with arrays
3. **Count passing students** - Conditional counting
4. **Filter array** - Using `filter()` method
5. **Calculate average** - Using `reduce()`

### 2. Mandatory Implement (`2-mandatory-implement/`)

Build functions for a grade tracking system:

1. `calculateClassAverage()` - Calculate average grade for a class
2. `getPassingStudents()` - Filter students who passed
3. `sortStudentsByGrade()` - Sort students by their scores
4. `getGradeLetter()` - Convert number grades to letter grades

### 3. Stretch Goals (`3-stretch/`)

Optional challenges:

- Build a complete grade analytics system
- Generate grade reports with statistics
- Implement grade distributions and percentiles

## Recommended Order

1. Complete all **key exercises** first (1-5)
2. Move to **mandatory implement** (build the functions)
3. Try **stretch goals** if you want extra practice

## Resources

- [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [JavaScript.info: Arrays](https://javascript.info/array)
- [JavaScript.info: Array methods](https://javascript.info/array-methods)

## Tips

💡 **Stuck on array methods?** Remember that `map`, `filter`, and `reduce` are just fancy loops! Start by writing a regular `for` loop, then refactor to use the array method.

💡 **Use `console.log()` everywhere** to see what your arrays look like at each step.

💡 **Start simple** — get one test case working before handling edge cases.

---

**Ready?** Start with `1-key-exercises/1-loop-grades.js` and work your way through!
