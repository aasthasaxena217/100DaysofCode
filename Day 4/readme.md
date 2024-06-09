#  [Removing Duplicates from sorted array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

This repository contains the code in JavaScript.

## Problem Description

The problem requires removing duplicates from a sorted integer array in-place while maintaining the original order. It then asks to return the count of unique elements present after the removal.

### Approach:

**Initialization:**  We set a variable countUnique to 1 because the first element is always unique. 
**Iteration:**  We look at each element in the array.
**Removing Duplicates:** If an element is different from the one before it, it's a new unique element. We put this new unique element where it belongs and count it.
**Returning Result**:  After going through all elements, we return how many unique ones we found.
This way, we keep only unique elements in the array and count them.

## Solution

```javascript
function removeDuplicates(nums) {
    let countUnique = 1; 
   
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[countUnique] = nums[i];
            countUnique++;
        }
    }
    return countUnique;
}
```

## Complexity:
**Time Complexity: O(n)** - The function iterates through the array once.
**Space Complexity: O(1)** - The function modifies the input array in-place without using any additional data structures.
