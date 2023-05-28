const obj = {
  a: 1,
  b: 8,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
};
const findMaxValue = (obj) => Math.max(...Object.values(obj));

console.log(findMaxValue(obj));
