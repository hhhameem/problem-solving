function sumPrimes(num) {
  let sum = 0;
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}

const isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return true;
}

console.log(sumPrimes(977));