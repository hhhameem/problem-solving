// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
  let newBookLIst = bookList.slice(0, bookList.length);
  newBookLIst.push(bookName);
  return newBookLIst;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
  let newBookLIst = bookList.slice(0, bookList.length);
  var book_index = newBookLIst.indexOf(bookName);
  if (book_index >= 0) {
    newBookLIst.splice(book_index, 1);
    return newBookLIst;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);