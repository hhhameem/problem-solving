// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
//('java', 'tpi%rcs'), ('c%ountry', 'edis'), ('down', 'nw%ot')
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function reverse(str) {
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

function removeChaos(str1, str2) {
    let string1, string2;
    if (str1.indexOf('%') == -1) {
        string1 = str1;
    } else {
        string1 = str1.replace('%','');
    }
    if (str2.indexOf('%') == -1) {
        string2 = reverse(str2);
    } else {
        string2 = reverse(str2.replace('%',''));
    }
    string = string1.concat(string2);
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(removeChaos('java', 'tpi%rcs'));
console.log(removeChaos('c%ountry', 'edis'));
console.log(removeChaos('down', 'nw%ot'));