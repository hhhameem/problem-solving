///sum of all numbers in an array


function sum(numbers){
    let summation = 0;
    for (const number of numbers) {
        summation += number;
    }
    return summation
}

// numbers = [1,2,3,4]
numbers = [1,4,36,67,4,-5,43,543,64,56,70,65,745,321,344];
console.log(`Sum of all the number is : ${sum(numbers)}`);

