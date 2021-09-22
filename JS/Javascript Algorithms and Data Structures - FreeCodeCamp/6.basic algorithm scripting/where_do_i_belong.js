function getIndexToIns(arr, num) {
    if (arr.length === 0) {
        return 0;
    }
    arr.sort((a, b) => a - b);
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === num) {
            return index;
        } else if (num > arr[index] && num < arr[index + 1]) {
            return index + 1;
        } else if (num > arr[arr.length - 1]) {
            return arr.length;
        }
    }
}

getIndexToIns([40, 60], 50);