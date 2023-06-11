function Person(name, age) {
  this.name = prompt("adinizi daxil edin");
  this.age = +prompt("yasinizi daxil edin");
}

Person.prototype.calculateBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

const person = new Person();

console.log(person.calculateBirthYear());
