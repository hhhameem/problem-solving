// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise


function checkEqualElement(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                result = true;
            } else {
                return false;
            }
        }
    }
    return result;
}

console.log(checkEqualElement([1,1,1,'2']));