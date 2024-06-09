# [ Single Number](https://leetcode.com/problems/single-number/description/ " Single Number")

**Problem Statement:** Given an array of integers nums, every element appears twice except for one. Find that single one.

**Approach:**

Initialize a variable uniqueNumber to 0.
Iterate through each element in the array.
Use the XOR operation (^) to find the unique number.
Return the unique number.

```javascript
class SingleNumber {
    public int findSingle(int[] nums) {
        int uniqueNumber = 0; 
        for (int num : nums) {
            uniqueNumber ^= num; 
        }
        return uniqueNumber; 
    }
}

```
XOR is a logical operation that returns true (or 1) if and only if the operands are different.


**Time Complexity: O(n) **- We traverse the entire array once.

**Space Complexity: O(1) **- We use only a constant amount of extra space regardless of the input size.
