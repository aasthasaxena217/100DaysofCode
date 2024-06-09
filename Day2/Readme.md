This repository contains solutions for the following problems in JavaScript:

## 1. [Reverse String]([https://leetcode.com/problems/reverse-string/])  | Leetcode

## Problem Description

Given an array of characters, reverse the array in place without using extra space.

## Solution

### Approach

1. **Start**: Set two pointers:
   - **Left pointer** (`l`) at the beginning.
   - **Right pointer** (`r`) at the end.

2. **Swap**: Here we are using a helper method swap to switch elements at two positions in the array.

3. **Loop and Swap**:
   - Swap the items at `l` and `r`.
   - Move `l` right and `r` left.
   - Repeat until `l` meets `r`.

4. **Done**: The array is reversed.

### Complexity

- **Time Complexity**: O(n) - We process each element once.
- **Space Complexity**: O(1) - We use a fixed amount of extra space for the pointers.

### Code

```javascript
function reverseString(arr) {
    let l = 0;
    let r = arr.length - 1;

    const swap = (a, i, j) => {
        [a[i], a[j]] = [a[j], a[i]];
    };

    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}

