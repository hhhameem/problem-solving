// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function averageOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

console.log(averageOfNumbers([10,100,1000]));