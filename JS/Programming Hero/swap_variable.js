//swap values two variable 

//destructuring 
let a = 5;
let b = 7;

[a, b] = [b, a];
console.log(`a is :${a} and b is ${b} after swap`);


//using temporary variable
let x = 6;
let y = 8;

let z = x;
x = y;
y = z;
console.log(`x is :${x} and y is ${y} after swap`);