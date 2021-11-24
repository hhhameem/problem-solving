//find out the largest element from an array of numbers
function largest_element(numbers){
    let largest = numbers[0];
    for(number of numbers){
        if (number>largest){
            largest = number;
        }
    }
    return largest;
}

//find out the smallest element from an array of numbers
function smallest_element(numbers){
    let smallest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        if (numbers[i]<smallest){
            smallest = numbers[i];
        }
    }
    return smallest;
}

numbers = [1,4,36,67,4,-5,43,543,64,56,70,65,745,321,344];
console.log(`largest element of this array is ${largest_element(numbers)}`);
console.log(`smallest element of this array is ${smallest_element(numbers)}`);