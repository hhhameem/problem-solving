// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string


function characterOccurance(char, str) {
    let count = 0;
    for (const chars of str.toLowerCase()) {
        if (chars === char) {
            count++;
        }
    }
    return count;
}

console.log(characterOccurance('m', 'How many times does the character occur in this sentence?'));
