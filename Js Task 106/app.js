const myObject = { name: "orxan", age: 28, job: "fe" };
const joinObjectProperties = (obj) => Object.keys(obj).join(",");

console.log(joinObjectProperties(myObject));
