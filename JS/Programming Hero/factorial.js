//find out the factorial of a number 

function factorial(number){
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact *= index;
    }
    return fact;
}

console.log(factorial(6));
