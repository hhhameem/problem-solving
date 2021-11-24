function confirmEnding(str, target) {
  const lastLetter = str.substring(str.length - target.length);
    return lastLetter === target ? true : false;
}

confirmEnding("Bastian", "n");