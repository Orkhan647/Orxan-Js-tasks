const obj1 = { name: 'Orxan', age: 30 };
const obj2 = { city: 'Baku', country: 'Azerbaijan' };

const concatObj = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(concatObj(obj1, obj2));
