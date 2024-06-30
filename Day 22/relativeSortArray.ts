function relativeSortArray(arr1: number[], arr2: number[]): number[] {

    let countMap = new Map();
    for (let num of arr1) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }
    
   
    let sortedArr = [];
    for (let num of arr2) {
        if (countMap.has(num)) {
            let count = countMap.get(num);
            while (count > 0) {
                sortedArr.push(num);
                count--;
            }
            countMap.delete(num);
        }
    }
    
    let remaining = [...countMap.keys()].sort((a, b) => a - b);
    for (let num of remaining) {
        let count = countMap.get(num);
        while (count > 0) {
            sortedArr.push(num);
            count--;
        }
    }
    
    return sortedArr;
};
