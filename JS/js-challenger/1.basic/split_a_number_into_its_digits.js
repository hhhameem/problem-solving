// Write a function that takes a number as an argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function splitNumber(number) {
    let digits = [];
    for (const char of number.toString()) {
        digits.push(parseInt(char));
    }
    return digits;
}

const result = splitNumber(193278);
console.log(result);