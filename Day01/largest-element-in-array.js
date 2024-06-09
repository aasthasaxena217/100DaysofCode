class Solution {
    largest(arr, n) {
        let max = arr[0];
        for (let i = 0; i < n; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }
}
