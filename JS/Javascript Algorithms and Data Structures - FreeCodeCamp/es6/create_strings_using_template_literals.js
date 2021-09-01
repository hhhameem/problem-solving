const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  const {failure : fail} = result;
  for (const item of fail) {
    const li = `<li class="text-warning">${item}</li>`;
    failureItems.push(li);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);