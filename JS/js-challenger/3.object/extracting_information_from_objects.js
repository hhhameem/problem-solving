// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
   const {fn, ln, size, weight} = obj;
   const newObj = {fn, ln};
   if(size){
      newObj.size = `${obj.size}cm`
   }
   if(weight){
      newObj.weight = `${obj.weight}kg`
   }
   return newObj;
}

//authors solution

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}