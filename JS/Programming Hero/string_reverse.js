//reverse a string


function stringReverse(str){
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed; 
    }
    return reversed;
}

const str = 'Hamim';
console.log(stringReverse(str));