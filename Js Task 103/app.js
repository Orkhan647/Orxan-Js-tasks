const repeatedElements = ["orxan", "or", "xan", "orxan", "or", "kerimov"];

function deleteRepeated(arr) {
  return Array.from(new Set(arr));
}
console.log(deleteRepeated(repeatedElements));
