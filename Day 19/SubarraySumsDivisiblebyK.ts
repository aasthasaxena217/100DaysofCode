function checkSubarraySum(nums: number[], k: number): boolean {
    let remainderMap = new Map();
    remainderMap.set(0, -1); 
    let cumulativeSum = 0;

    for (let i = 0; i < nums.length; i++) {
        cumulativeSum += nums[i];
        let remainder = cumulativeSum % k;

        if (remainderMap.has(remainder)) {
            if (i - remainderMap.get(remainder) > 1) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
};
