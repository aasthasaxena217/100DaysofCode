
class Solution {
    partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1; 
        
        for (let j = low; j < high; j++) {
            
            if (arr[j] <= pivot) {
                i++; 
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1; 
    }
    
    quickSort(arr, low, high) {
        if (low < high) {
          
            let pi = this.partition(arr, low, high);
            this.quickSort(arr, low, pi - 1);
            this.quickSort(arr, pi + 1, high);
        }
    }
}
