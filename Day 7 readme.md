# [Finding the Second Largest Element in an Array](http:/https://www.geeksforgeeks.org/problems/second-largest3735// "Finding the Second Largest Element in an Array")

This readme contains a solution in Javascript.

## Problem Description

Given an array of integers, find and return the second largest element. If the array contains less than two elements, return -1. The array may contain duplicate elements, and the second largest element should be distinct.

### Approach

1. **Check Array Length**: If the array length is less than 2, return -1, as there can't be a second largest element.

2. **Create Unique Set**: Create a set from the array to remove duplicates and maintain the original order.

3. **Convert Set to Array**: Convert the unique set back to an array to work with the unique elements.

4. **Check Array Length**: If the array length is 1 after removing duplicates, return -1, as there's only one unique element.

5. **Find Second Largest Element**: Iterate through the unique array to find the second largest element:
   - Initialize variables `fL` (first largest) and `sL` (second largest) with the first two elements of the unique array.
   - Compare each element with `fL` and `sL`, updating them accordingly.

6. **Return Result**: After the iteration, the variable `sL` will hold the second largest element. Return it.

### Code

```javascript
class Solution {
    print2largest(arr, n) {
        if (n < 2) return -1;

        let uniqueSet = new Set(arr);
        let uniqueArray = [...uniqueSet];
        if (uniqueArray.length == 1) return -1;

        let fL = uniqueArray[0];
        let sL = uniqueArray[1];

        for (let i = 0; i < uniqueArray.length; i++) {
            if (uniqueArray[i] > fL) {
                sL = fL;
                fL = uniqueArray[i];
            } else if (uniqueArray[i] > sL && uniqueArray[i] != fL) {
                sL = uniqueArray[i];
            }
        }
        return sL;
    }
}
```

Complexity Analysis
**Time Complexity: O(n) -** The solution iterates through the array once.
**Space Complexity: O(n)** - Extra space is used to store unique elements in a set.
