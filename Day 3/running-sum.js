function runningSum(nums) {
    let result = 0;
    return nums.map(item => result += item);
}
