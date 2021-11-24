function sentensify(str) {
  // Only change code below this line
  const newStr = str.split(/\W/);
  return newStr.join(' ');
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");