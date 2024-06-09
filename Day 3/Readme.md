# Running Sum of 1D Array

This repository contains solutions to the problem of calculating the running sum of a 1D array.

## Problem Description

Given an array of numbers, return a new array where each element at index `i` is the sum of the elements from index `0` to `i` in the original array.

## Solution

### Approach 1: Using `map` Function

1. **Initialize**: Set a variable `result` to zero. This variable will keep track of the running sum.
2. **Map Function**: Use the `map` function to iterate over each element in the array.
   - For each element, add it to `result` and return the updated `result` for that position in the new array.
3. **Return**: The `map` function returns a new array with the running sums.

#### Code

Here is the implementation using the `map` function:

```javascript
/**
 * Computes the running sum of an array using the map function.
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {number[]} - The running sum array.
 */
function runningSum(nums) {
    let result = 0;
    return nums.map(item => result += item);
}
```
**Why map?**:"The map function helps make a new array by changing each item in the original one. It's like a shortcut that makes the code shorter and easier to understand. For each item in the array, we do something to it and then put the new item in the new array."

### Approach 1: Using simple for loop

1. **Initialize**: Set a variable result to zero and create an empty array runningSums to store the results.
2. **Iterate**: Use a for loop to iterate over each element in the array.
For each element, add it to result.
Push the updated result to the runningSums array.
3. **Return**: Return the runningSums array.

```javascript
function runningSum(nums) {
    let result = 0;
    let runningSums = [];
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
        runningSums.push(result);
    }
    return runningSums;
}
``` 
