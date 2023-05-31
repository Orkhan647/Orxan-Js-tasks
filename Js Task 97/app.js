const hiddenNames = (arr) =>
  arr.map((name) => name.slice(0, 2) + "*".repeat(name.length-2));
let arr = ["ali", "reza", "alireza", "muhammad", "coshqun", "eles"];
console.log(hiddenNames(arr));
