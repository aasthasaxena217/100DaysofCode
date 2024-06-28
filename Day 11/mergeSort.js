class Solution {
    merge(arr, l, m, r) {
        let n1 = m - l + 1; // Size of left subarray
        let n2 = r - m;     // Size of right subarray
        
        // Create temporary arrays
        let L = new Array(n1);
        let R = new Array(n2);
        
        // Copy data to temporary arrays L[] and R[]
        for (let i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (let j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];
        
        // Merge the temporary arrays back into arr[l..r]
        let i = 0; // Initial index of left subarray
        let j = 0; // Initial index of right subarray
        let k = l; // Initial index of merged subarray
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        
        // Copy the remaining elements of L[], if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        
        // Copy the remaining elements of R[], if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    
    mergeSort(arr, l, r) {
        if (l >= r) {
            return; // Base case: array of size 1 or less is already sorted
        }
        
        let m = Math.floor(l + (r - l) / 2); // Calculate middle index
        
        // Recursively sort both halves
        this.mergeSort(arr, l, m);
        this.mergeSort(arr, m + 1, r);
        
        // Merge the sorted halves
        this.merge(arr, l, m, r);
    }
}
