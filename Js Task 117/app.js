function CustomArray() {
  this.array = Array.from(arguments);
}

CustomArray.prototype.sum = function () {
  let total = 0;
  for (let i = 0; i < this.array.length; i++) {
    total += this.array[i];
  }
  return total;
};

const customArr = new CustomArray(1, 2, 3, 4, 5,12,53);
console.log(customArr.sum());
