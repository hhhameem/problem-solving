function largestOfFour(arr) {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(Math.max(...arr[index]));
    }
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);