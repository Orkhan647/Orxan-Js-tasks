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
personData.showPersonData();
