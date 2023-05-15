function Car(model, year, owner) {
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.Surmek = () => {
    console.log(`${owner} ${year}-ci il olan  ${model} markali masina qaz verir`);
  };
  this.Tormoz = () => {
    console.log(`${owner} ${year}-ci il olan ${model} markali masina tormoz verir`);
  };
}

const CarInfo = new Car("Mercedes", "2012", "Orxan");

CarInfo.Surmek();
CarInfo.Tormoz();

