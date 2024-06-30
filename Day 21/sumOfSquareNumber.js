function judgeSquareSum(c: number): boolean {
    if (c < 0) return false;
    
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
    
    while (left <= right) {
        let sum = left * left + right * right;
        if (sum === c) {
            return true;
        } else if (sum < c) {
            left++;
        } else {
            right--;
        }
    }
    
    return false;
};
