function uniteUnique(arr, ...args) {
  const newArr = arr.slice();
  for(let i = 0; i < args.length; i++){
    for(let j = 0; j < args[i].length; j++){
      if(newArr.indexOf(args[i][j]) <= -1){
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));