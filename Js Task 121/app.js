class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showPersonData() {
    console.log(
      `Men ${this.name} adli shexsem ve menim ${this.age} yashim var 😉`
    );
  }
}
const personData = new Person("Orxan", 28);

class Employee extends Person {
  constructor(name, age, duty) {
    super(name, age, duty);
    this.duty = duty;
  }
  showDuty() {
    console.log(
      `Men ${this.name} adli shexsem ve menim ${this.age} yasim var ve ${this.duty} vezifesinde calisiram 😉`
    );
  }
}
const personData1 = new Employee("Orxan", 28, '"FE" Developer');
personData1.showDuty();
