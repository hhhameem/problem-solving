// Only change code below this line
function urlSlug(title) {
  const arr = title.trim().toLowerCase().split(/\s+/);
  return arr.join('-');
}
// Only change code above this line

console.log(urlSlug(" Winter Is Coming"));