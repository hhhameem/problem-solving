function palindrome(str) {
  const regex = /[\W_]+/g;
  const letters = str.replace(regex, '').toLowerCase();
  return letters == stringReverse(letters); 
}

function stringReverse(str){
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed; 
    }
    return reversed;
}


console.log(palindrome("five|\_/|four"));