# Sprint 4 — Stretch Goal: Grade Analytics System 💪

This is an optional challenge to push your array skills further!

## Challenge

Build a complete **grade analytics dashboard** that provides comprehensive statistics for a class of students.

## Requirements

Implement a function `analyzeClassPerformance(students)` that accepts an array of student objects and returns a statistics object.

### Input Format

```javascript
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 95 },
  // ... more students
];
```

### Output Format

```javascript
{
  totalStudents: 25,
  averageGrade: 78.5,
  highestGrade: 98,
  lowestGrade: 45,
  median: 80,
  passingRate: 84, // percentage
  gradeDistribution: {
    A: 5,  // 90-100
    B: 8,  // 80-89
    C: 7,  // 70-79
    D: 3,  // 60-69
    F: 2   // below 60
  },
  topPerformers: [
    { name: "Charlie", grade: 98 },
    { name: "Diana", grade: 95 },
    { name: "Eve", grade: 93 }
  ] // top 3 students
}
```

## Tasks

1. **Calculate basic statistics**
   - Total number of students
   - Average grade
   - Highest and lowest grades
   
2. **Calculate median**
   - Sort the grades and find the middle value
   - Handle both odd and even number of students

3. **Calculate passing rate**
   - Percentage of students with grade >= 60

4. **Grade distribution**
   - Count how many students got each letter grade (A, B, C, D, F)

5. **Identify top performers**
   - Return array of top 3 students sorted by grade

## Bonus Challenges

- **Standard deviation**: Calculate how spread out the grades are
- **Percentiles**: Find the grade at 25th, 50th, 75th, and 90th percentiles
- **Grade trends**: If you have grades from multiple tests, show improvement/decline
- **Visualization data**: Generate data ready for charts (e.g., histogram bins)

## Tips

💡 Break this into smaller functions — don't try to do everything in one function!

💡 You can reuse functions you wrote earlier in this sprint.

💡 Test with small datasets first, then try larger ones.

## Starter Code

```javascript
function analyzeClassPerformance(students) {
  const stats = {
    totalStudents: students.length,
    averageGrade: 0,
    highestGrade: 0,
    lowestGrade: 0,
    median: 0,
    passingRate: 0,
    gradeDistribution: {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      F: 0
    },
    topPerformers: []
  };

  // TODO: Implement the logic
  
  return stats;
}

// Test data
const testClass = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 68 },
  { name: "Eve", grade: 91 },
  { name: "Frank", grade: 78 },
  { name: "Grace", grade: 88 },
  { name: "Henry", grade: 55 },
  { name: "Ivy", grade: 92 },
  { name: "Jack", grade: 76 }
];

console.log(analyzeClassPerformance(testClass));
```

Good luck! 🚀
