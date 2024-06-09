function reverseString(arr) {
    let l = 0;
    let r = arr.length - 1;

    const swap = (a, i, j) => {
        [a[i], a[j]] = [a[j], a[i]];
    };

    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}
