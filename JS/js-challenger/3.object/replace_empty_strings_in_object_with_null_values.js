// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
   const newObj = {...obj}
   for (const [key, value] of Object.entries(newObj )) {
     if(!value || value.trim().length === 0) {
         newObj [key] = null;
      }
   }
   return newObj ;
}

//authors solution

function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}