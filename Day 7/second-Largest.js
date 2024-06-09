class Solution {
    print2largest(arr, n) {
        if (n < 2) return -1;

        let uniqueSet = new Set(arr);
        let uniqueArray = [...uniqueSet];
        if (uniqueArray.length == 1) return -1;

        let fL = uniqueArray[0];
        let sL = uniqueArray[1];

        for (let i = 0; i < uniqueArray.length; i++) {
            if (uniqueArray[i] > fL) {
                sL = fL;
                fL = uniqueArray[i];
            } else if (uniqueArray[i] > sL && uniqueArray[i] != fL) {
                sL = uniqueArray[i];
            }
        }
        return sL;
    }
}
