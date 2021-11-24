// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function containConcate(a, b) {
    indexNumber = a.indexOf(b);
    if (indexNumber > 0) {
        return b+a;
    } else {
        return a+b;
    }
 }

//  const x = containConcate("cheese", "cake");
const x = containConcate("lips", "s");
console.log(x);