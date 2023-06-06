const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function splitArray(numberArray, sliceCount) {
  const result = [];
  const length = numberArray.length;
  const sliceSize = Math.ceil(length / sliceCount);

  for (let i = 0; i < length; i += sliceSize) {
    result.push(numberArray.slice(i, i + sliceSize));
  }

  return result;
}

const result = splitArray(numberArray, 2);
console.log(result);
