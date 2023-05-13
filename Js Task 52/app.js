const propertyTaker = (obj, propertyName) => {
  console.log(obj[propertyName]);
};

propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'country')
propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'continent')  
propertyTaker({name:'ali', age:12}, 'name')