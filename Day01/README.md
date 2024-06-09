This repository contains solutions for the following problems:

# GeeksForGeeks Array Problems Solutions

## 1. [Largest Element in Array](https://www.geeksforgeeks.org/problems/largest-element-in-array4009/)

### Problem Statement
Given an array, find the largest element in it.

### Approach

1. **Initialization**: Assume (max = arr[0]) that the greatest element in the array is the first one.
2. **Count through the array iteratively**.
3. **Update Max** with the element if any of the elements exceed it.
4. **Result**: By traversing the array we get max, that contains the largest member in the array.

### Solution
```javascript
class Solution {
    largest(arr, n) {
        let max = arr[0];
        for (let i = 0; i < n; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }
}
```
### Complexity 
O(n) is the time complexity, where n is the array's element count. This is as a result of the solution's single array iteration.
O(1) space complexity because, other from a few variables, no additional space is needed.

Example:
const solution = new Solution();
const arr = [1, 2, 3, 4, 5];
const n = arr.length;
console.log(solution.largest(arr, n));

Output:
5
