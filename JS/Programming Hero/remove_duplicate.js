//remove duplicate elements from an array


function removeDuplicate(numbers){
    const newNumbers = [];
    for (const number of numbers) {
        if (newNumbers.indexOf(number) == -1){
            newNumbers.push(number);
        }        
    }
    return newNumbers;
}

numbers = [1,2,1,4,5,1,3];
console.log(removeDuplicate(numbers));