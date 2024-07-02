var rearrangeArray = function(nums) {
       const positives = [];
    const negatives = [];

    for (let num of nums) {
        if (num > 0) {
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }

    const result = [];
    for (let i = 0; i < positives.length; i++) {
        result.push(positives[i]);
        result.push(negatives[i]);
    }

    return result;
};
