function check(nums: number[]): boolean {
      let n = nums.length;
    let k = -1;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            k = i;
            break;
        }
    }
    if (k === -1) {
        return true;
    }
    for (let i = k + 1; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }
    return nums[n - 1] <= nums[0];
};
