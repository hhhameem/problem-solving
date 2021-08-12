// Write a function that takes an numbersay of numbers as an argument
// It should return an number say with the numbers sorted in descending order

function sortString(numbers) {
    for (let x = 0; x < numbers.length; x++) {
        for (let y = x+1; y < numbers.length; y++) {
            if (numbers[x] < numbers[y]) {
                let temp = numbers[x];
                numbers[x] = numbers[y];
                numbers[y] = temp;
             }
        }   
    }
    return numbers;
}

console.log(sortString([1,3,15,2,11]));