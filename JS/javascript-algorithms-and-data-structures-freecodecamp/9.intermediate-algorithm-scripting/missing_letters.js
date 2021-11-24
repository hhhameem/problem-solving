function fearNotLetter(str) {
  let charToReturn;
  for(let i = str.charCodeAt(0); i <= str.charCodeAt(str.length-1); i++){
    let char = String.fromCharCode(i);
    if(!str.includes(char)){
      charToReturn = char;
    }
  }
  return charToReturn;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));