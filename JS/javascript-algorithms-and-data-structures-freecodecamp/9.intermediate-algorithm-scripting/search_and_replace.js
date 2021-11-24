function myReplace(str, before, after) {
  const upper = /^[A-Z]/
  if(upper.test(before)){
    return str.replace(before, after[0].toUpperCase().concat(after.slice(1)));
  } else {
    return str.replace(before, after[0].toLowerCase().concat(after.slice(1)));
  }
}

console.log(myReplace("I think we should look up there", "up", "Down"));