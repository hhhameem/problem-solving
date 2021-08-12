// Write a function that takes an array of strings as an argument
// It should return the longest string


function longestString(str) {
    let longestElement = str[0];
    for (const element of str) {
        (longestElement.length < element.length) ? longestElement = element : longestElement;
    }
    return longestElement;
}

console.log(longestString(['I', 'need', 'candy']));