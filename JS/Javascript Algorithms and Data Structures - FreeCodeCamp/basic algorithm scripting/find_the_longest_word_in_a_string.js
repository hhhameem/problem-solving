function findLongestWordLength(str) {
    const words = str.split(" ");
    let max = words[0].length;
    for (let i = 0; i < words.length; i++) {
        if (max < words[i].length) {
            max = words[i].length;
        }
    }
    return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");