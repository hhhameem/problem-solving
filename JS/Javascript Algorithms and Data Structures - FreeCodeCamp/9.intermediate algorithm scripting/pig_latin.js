function translatePigLatin(str) {
  let newStr;
  const vowel = /^[aeiou]/;
  const consonant = /[^aeiou]+/;
  if(vowel.test(str)){
    newStr = str + 'way';
  } else{
    const consonantCluster = str.match(consonant);
    newStr = str.slice(consonantCluster[0].length) + consonantCluster[0] + 'ay';
  }
  return newStr;
}

console.log(translatePigLatin("california"));