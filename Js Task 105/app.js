const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getNumbersGreaterThan(numberArray, num) {
  return numberArr.filter((numberArray) => numberArray > num);
}
console.log(getNumbersGreaterThan(numberArr, 1));
