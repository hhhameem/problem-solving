// Write a function that takes an array and a number (n) as an arguments
// It should return the last n array elements
// If the array has less than or equal n elements, return all


function lastNElements(numbers, n) {
    return (numbers.length <= n) ? numbers : numbers.slice(-n);
}

console.log(lastNElements([1, 2, 3, 4, 5], 1));