// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max


function rangeOfNumbers(start, end) {
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

console.log(rangeOfNumbers(-5, 5));