//print out the fibonacci seies

function fibonacci(number){
    const fibo = [0,1];
    for (let index = 2; index < number; index++) {
        fibo[index] = fibo[index-1] + fibo[index-2];  
    }
    return fibo;
}

console.log(fibonacci(10));