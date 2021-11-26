// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
   let newObj = {};
   for(const [key, value] of Object.entries(obj)) {
      newObj[value] = key;
   }
   return newObj;
}

//authors solutions
function myFunction(obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    return {  ...acc, [obj[cur]]: cur };
  }, {});
}