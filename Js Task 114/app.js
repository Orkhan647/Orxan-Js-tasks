function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}!`;
};

var john = new Person("John", 25);
console.log(john.greet());
