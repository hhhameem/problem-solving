// Write a function that takes an object as an argument
// It should return an object with all original object properties but the property with key 'country'

function myFunction(obj) {
  delete obj.country;
  return obj;
}

//authors solution(using spread operator)

function myFunction(obj) {
  const { country, ...rest } = obj;
  return rest;
}