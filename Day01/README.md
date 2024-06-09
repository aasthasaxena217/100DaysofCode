This repository contains solutions for the following problems in JavaScript:

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

## 2.[Score of a String](https://leetcode.com/problems/score-of-a-string/) problem on LeetCode.

## Problem Statement

Given a string `s`, find the score of the string. The score is the sum of the absolute differences of the ASCII values of each pair of adjacent characters.

### Approach

1. **Initialize**: Start with a `score` of zero.
2. **Iterate**: Loop through the string from the first character to the second to last character.
   - `for (let i = 0; i < s.length - 1; i++)` ensures we don't go out of bounds.
3. **Calculate**: For each character, find the absolute difference between its ASCII value and the next character's ASCII value.
4. **Accumulate**: Add this difference to `score`.
5. **Return**: Return the final `score` after the loop ends.
6. charCodeAt method is a built-in JavaScript function that returns the Unicode value(ASCII value).
    
### Solution

```javascript
function scoreOfString(s) {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return score;
}
```

### Complexity

- **Time Complexity**: O(n) - We process each character once.
- **Space Complexity**: O(1) - We use a fixed amount of extra space.
