// Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces.

function WordCount(str) {
  // code goes here
  return str.split(" ").length;
}

// keep this function call here
console.log(WordCount(readline()));
