function existsAndTruthy(obj, propertyName) {
  if (obj[propertyName]) {
    return true;
  } else {
    return false;
  }
}
console.log(existsAndTruthy({ a: 1, b: 2, c: 3 }, "b"));
console.log(existsAndTruthy({ x: "a", y: null, z: "c" }, "y"));
console.log(existsAndTruthy({ x: "a", b: "b", z: undefined }, "z"));
