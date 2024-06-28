class Solution
{
  insert(arr,i){
      let current=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
  }

   //Function to sort the array using insertion sort algorithm.
  insertionSort(arr,n){
 for (let i = 1; i < n; i++) {
            this.insert(arr, i);
        }
   
  }
    
}
