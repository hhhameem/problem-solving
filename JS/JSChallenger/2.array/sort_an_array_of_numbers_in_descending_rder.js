// Write a function that takes an numbersay of numbers as an argument
// It should return an number say with the numbers sorted in descending order

function sortString(numbers) {
    numbers.sort((a, b) => a-b).reverse();
    return numbers;
}

console.log(sortString([1,3,15,2,11]));