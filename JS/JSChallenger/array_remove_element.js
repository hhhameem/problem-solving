// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the clean version


function removeElement(arr, value) {
    for (const element of arr) {
        if (element === value) {
            arr.splice(arr.indexOf(element),1);
        }
    }
    return arr;
}

console.log(removeElement([1,2,'2',1], 1))