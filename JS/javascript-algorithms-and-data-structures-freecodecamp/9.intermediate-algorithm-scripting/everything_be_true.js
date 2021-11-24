function truthCheck(collection, pre) {
  let contain;
  for(const object of collection){
    if(object.hasOwnProperty(pre)){
      if(object[pre]){
        contain = true
      } else{
        return false;
      }
    } else {
      return false;
    }
  }
  return contain;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));