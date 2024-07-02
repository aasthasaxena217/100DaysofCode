
var twoSum = function(nums, target) {
    let resultarr=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                resultarr.push(i);
                resultarr.push(j);
            }
        }
    }
    return resultarr;
};
