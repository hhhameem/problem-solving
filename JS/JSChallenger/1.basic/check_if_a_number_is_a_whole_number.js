function checkInteger(number){
    return Number.isInteger(number);
}

// function checkInteger(number){
//     return number-Math.floor(number) === 0;
// }

console.log(checkInteger(5));
console.log(checkInteger(5.05));