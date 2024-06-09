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
