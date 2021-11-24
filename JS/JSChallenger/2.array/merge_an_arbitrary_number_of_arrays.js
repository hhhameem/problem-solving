// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


function marge() {
    let margedArray = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            margedArray.push(arguments[i][j]);
        }
    }
    return margedArray;
}


console.log(marge([true, true], [1, 2], ['a', 'b']));