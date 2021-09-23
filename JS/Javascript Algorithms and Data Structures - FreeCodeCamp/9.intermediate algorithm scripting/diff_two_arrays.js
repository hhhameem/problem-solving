function diffArray(arr1, arr2) {
  var newArr = [...dif(arr1, arr2), ...dif(arr2, arr1)];
  
  function dif(a, b){
    return a.filter(item => b.indexOf(item) < 0);
  }
  return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));