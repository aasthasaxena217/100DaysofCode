class Solution
{
   //Function to sort the array using bubble sort algorithm.
   bubbleSort(arr,n){
       let temp;
     for(let i=0;i<arr.length;i++){
        
        for(let j=0;j<n-1-i;j++){
if(arr[j]>arr[j+1]){
    temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
}
        }
    }
    return arr
   }
    
}
