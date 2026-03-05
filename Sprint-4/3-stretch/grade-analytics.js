/**
 * Sprint 4 - Stretch Challenge: Grade Analytics System
 * 
 * Build a complete analytics dashboard for class performance.
 * See README.md for full requirements.
 */

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

  // TODO: Implement the complete analytics logic
  
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

module.exports = analyzeClassPerformance;
