// This problem was given to me in an interview for front end developer in Cloud Production ltd.

// print all the numbers between a range without using loop

function printNumbers(start, end) {
  console.log(start);
  if (start === end) {
    return;
  }
  printNumbers(start + 1, end);
}

printNumbers(1, 5);
