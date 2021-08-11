// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function percentage(myObject) {
    const number = myObject.number;
    const percentage = myObject.percentage;

    return ((number / 100) * percentage);
}

console.log(percentage({number: 777, percentage: 2}))