function nextPermutation(nums: number[]): void {
        const n = nums.length;
        let k = -1;
        
       
        for (let i = n - 2; i >= 0; i--) {
            if (nums[i] < nums[i + 1]) {
                k = i;
                break;
            }
        }
        
       
        if (k === -1) {
            nums.sort((a, b) => a - b);
            return;
        }
        
       
        let mni = -1;
        let mnv = Infinity;
        for (let i = k + 1; i < n; i++) {
            if (nums[i] > nums[k]) {
                if (mnv >= nums[i]) {
                    mnv = nums[i];
                    mni = i;
                }
            }
        }
        
       
        [nums[k], nums[mni]] = [nums[mni], nums[k]];
        
        
        let left = k + 1;
        let right = n - 1;
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
        
        
        console.log(nums.join(' '));
};
