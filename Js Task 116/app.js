function CustomArray() {
  this.array = Array.from(arguments);
}

CustomArray.prototype.getFirstElement = function () {
  return this.array[0];
};

const customArr = new CustomArray("Orxan", 2, 3, 4);
console.log(customArr.getFirstElement());
