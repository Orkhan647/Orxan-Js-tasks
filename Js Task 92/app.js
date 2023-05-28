const obj = {
  soyad: "orxan",
  ad: "Kerimov",
  yas: 28,
  is: "Fe",
  olke: "Azerbaycan",
};

function sortObject(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};
  for (let key of sortedKeys) {
    sortedObj[key] = obj[key];
  }
  return sortedObj;
}

console.log(sortObject(obj));
