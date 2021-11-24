// This challenge is a little bit more complex
// Write a function that takes a number as an argument
// If the number is prime, return the number
// If not, return the next higher prime number

function nextPrime(number) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            ++number;
            i=1;
        }
    }
    return number;
 }

 console.log(nextPrime(2000));