# Sprint 10 - Stretch Goal: Sorting Algorithm Comparison

Implement and compare different sorting algorithms!

## Requirements

Implement at least 3 sorting algorithms:

### 1. Bubble Sort

- Compare adjacent elements and swap if needed
- Repeat until array is sorted
- Time complexity: O(n²)

### 2. Selection Sort

- Find minimum element and move to beginning
- Repeat for remaining elements
- Time complexity: O(n²)

### 3. Merge Sort

- Divide array in half recursively
- Merge sorted halves
- Time complexity: O(n log n)

### 4. Quick Sort (Bonus)

- Pick a pivot element
- Partition array around pivot
- Recursively sort partitions
- Time complexity: O(n log n) average

## Technical Specifications

```javascript
class SortingAlgorithms {
  bubbleSort(arr) {
    // Implement bubble sort
  }

  selectionSort(arr) {
    // Implement selection sort
  }

  mergeSort(arr) {
    // Implement merge sort
  }

  quickSort(arr) {
    // Implement quick sort (bonus)
  }

  compare(arr, algorithms) {
    // Compare performance of different algorithms
    // Return execution times
  }
}
```

## Features to Implement

1. **Visualization**: Log each swap/comparison step
2. **Performance Testing**: Measure execution time
3. **Comparison Tool**: Compare different algorithms
4. **Test Cases**: Small, large, sorted, reverse-sorted arrays
5. **Statistics**: Count comparisons and swaps

## Bonus Features

- Implement insertion sort
- Implement heap sort
- Create visual step-by-step animation (using console)
- Add stability check (maintains relative order of equal elements)
- Test with different data types (numbers, strings, objects)

## Test Arrays

```javascript
const small = [5, 2, 8, 1, 9];
const medium = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
const large = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000)
);
const sorted = [1, 2, 3, 4, 5];
const reversed = [5, 4, 3, 2, 1];
const duplicates = [5, 2, 8, 2, 9, 5, 1];
```

## Expected Output

```
Bubble Sort: 123ms, 4,500 comparisons, 2,300 swaps
Selection Sort: 98ms, 4,950 comparisons, 100 swaps
Merge Sort: 15ms, 2,800 comparisons, 0 swaps
Quick Sort: 12ms, 2,500 comparisons, 800 swaps

Winner: Quick Sort (fastest)
Most efficient (fewest operations): Merge Sort
```

This exercise combines algorithms, performance analysis, and computer science fundamentals!
