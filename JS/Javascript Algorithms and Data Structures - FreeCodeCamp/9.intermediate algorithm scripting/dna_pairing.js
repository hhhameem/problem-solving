function pairElement(str) {
  const obj = {
    A : "T",
    T : "A",
    C : "G",
    G : "C",
  }
  const myArr = [];
  for(const char of str){
    myArr.push([char, obj[char]]);
  }
  return myArr;
}

console.log(pairElement("ATCGA"));