function minDifference(nums: number[]): number {
    const n = nums.length;
    if (n <= 4) return 0;

    nums.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 0; i <= 3; i++) {
        minDiff = Math.min(minDiff, nums[n - 4 + i] - nums[i]);
    }

    return minDiff;
};
