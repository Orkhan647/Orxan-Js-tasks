const genRandom = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};
console.log(genRandom(1, 3));
