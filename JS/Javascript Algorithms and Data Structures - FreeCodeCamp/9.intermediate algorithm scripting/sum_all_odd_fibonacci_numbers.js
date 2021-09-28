function sumFibs(num) {
  const nums = fibonacci(num);
  const oddNums = nums.filter(num => num % 2 === 1);
  const sum = oddNums.reduce((prev, current) => prev + current, 0);
  return sum;
}

function fibonacci(number){
    const fiboNumbers = [0,1];
    for (let index = 2; index <= number; index++) {
        let sum = fiboNumbers[index-1] + fiboNumbers[index-2];
        if(sum <= number){
          fiboNumbers[index] = sum;
        } 
    }
    return fiboNumbers;
}

console.log(sumFibs(75025));