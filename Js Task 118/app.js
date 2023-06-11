function CustomArray() {
  this.array = Array.from(arguments);
}
CustomArray.prototype.even = function () {
  return this.array.filter((elem) => elem % 2 === 0);
};

const customArr = new CustomArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 112);
console.log(customArr.even());
