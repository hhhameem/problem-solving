// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function nextHigherDecimal(x, y) {
    let result;
    if (x % y == 0) {
        result =  x;
    } else {
        for (let index = x; ; index++) {
            if (index % y == 0) {
                result = index;
                break;
            }
        }
        return result;
    }
} 

var z = nextHigherDecimal(-5, 7);
console.log(z);