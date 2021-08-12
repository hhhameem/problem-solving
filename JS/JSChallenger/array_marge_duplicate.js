// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array


function sort(arr) {
    for (let x = 0; x < arr.length; x++) {
        for (let y = x+1; y < arr.length; y++) {
            if (arr[x] > arr[y]) {
                let temp = arr[x];
                arr[x] = arr[y];
                arr[y] = temp;
             }
        }   
    }
    return arr;
}


function margeDuplicate() {
    let margedArray = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            (margedArray.indexOf(arguments[i][j]) == -1) ? margedArray.push(arguments[i][j]) : margedArray;
        } 
    }
    return sort(margedArray);
}

console.log(margeDuplicate([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));