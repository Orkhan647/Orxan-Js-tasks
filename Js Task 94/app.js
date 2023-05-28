const obj = {
  ad: "Orxan",
  age: 28,
  heigth: 184,
  gender: "man",
  country: "Azerbaijan",
};
const findStrig = (obj) =>
  Object.keys(obj).filter((key) => typeof obj[key] === "string");

console.log(findStrig(obj));
