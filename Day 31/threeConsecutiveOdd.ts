function threeConsecutiveOdds(arr: number[]): boolean {

    if(arr.length<3) return false;

    let left=0;
    let right=2;

    while(right<arr.length){
        if (arr[left] % 2 !== 0 && arr[left + 1] % 2 !== 0 && arr[right] % 2 !== 0) {
            return true;
        }
        left += 1;
        right += 1;
    }

    return false;

};
