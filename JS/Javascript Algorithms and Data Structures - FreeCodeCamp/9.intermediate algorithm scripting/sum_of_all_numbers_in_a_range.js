function sumAll(arr) {
  const [a, b] = arr;
  const [greater, smaller] = highestLowest(a, b);
  let sum = 0;
  for(let i = smaller; i<=greater; i++){
    sum += i; 
  }
  return sum;
}


function highestLowest(a, b){
  if(a > b){
    return [a, b];
  } else{
    return [b, a];
  }
}
sumAll([1, 4]);