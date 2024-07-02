var subarraySum = function(nums, k) {
       let count = 0;
    let sum = 0;
    let sumMap = new Map();
    
  
    sumMap.set(0, 1);
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
       
        if (sumMap.has(sum - k)) {
            count += sumMap.get(sum - k);
        }
     
        if (sumMap.has(sum)) {
            sumMap.set(sum, sumMap.get(sum) + 1);
        } else {
            sumMap.set(sum, 1);
        }
    }
    
    return count;
};
