const kmhSpeed = +prompt("zehmet olmasa Kmh Daxil edin");
const kmhConverter = () => {
  return `${kmhSpeed}  Kmh =  ${kmhSpeed / 3.6} msSpeed`;
};

console.log(kmhConverter());
