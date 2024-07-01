function moveZeroes(nums: number[]): void {
    
  let lastNonZeroFoundAt = 0;

    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }

    
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }


};
