function dropElements(arr, func) {
  let newArr= arr.slice();
  for(let i = 0; i < arr.length; i++){
    if(!func(arr[i])){
      newArr.shift();
    } else {
      return newArr;
    }
  }
  return newArr;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; }));