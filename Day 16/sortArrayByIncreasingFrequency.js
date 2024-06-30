class Solution {
  frequencySort(nums) {
    const freq = new Map();
    for (const num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }
    nums.sort((a, b) => {
      if (freq.get(a) !== freq.get(b)) {
        return freq.get(a) - freq.get(b); 
      }
      return b - a; 
    });

    return nums;
  }
}
