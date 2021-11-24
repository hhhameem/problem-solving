// Write a function that takes a word as an argument
// As it is, the word has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word


function incrementLetters(word) {
    let correctWord = '';
    for (let index = 0; index < word.length; index++) {
        let asciiValue = word.charCodeAt(index);
        correctWord += String.fromCharCode(++asciiValue);
    }
    return correctWord;
}

console.log(incrementLetters('sdrshmf'));