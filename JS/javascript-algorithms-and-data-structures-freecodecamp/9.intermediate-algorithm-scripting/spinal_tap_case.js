function spinalCase(str) {

  let arr = str.match(/[A-Z][a-z]+|[a-z]+/g)

  return arr.join("-").toLowerCase();

}

spinalCase('This Is Spinal Tap');