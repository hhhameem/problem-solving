// Write a function that takes two objects as an arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

function myFunction(objA, objB) {
   objB.city = objB.country;
   delete objB.country;
   newObj = {...objA, ...objB};
   return newObj;
}

//authors solution(using rest parameters)

function myFunction(first, second) {
  const { country, ...rest } = second;
  return { ...first, ...rest, city: country };
}