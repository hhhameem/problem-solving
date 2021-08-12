// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum


function sumOfElements(arr, threshold) {
    let sum = 0;
    for (const element of arr) {
       if (element > threshold) {
           sum += element;
       }
    }
    return sum;
}

console.log(sumOfElements([1, 2, 3, 4, 5, 6, 7], 2))