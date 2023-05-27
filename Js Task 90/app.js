const boyukHerfler = (str) => {
  let boyukHerf = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      boyukHerf++;
    }
  }
  return boyukHerf;
};
console.log(boyukHerfler("OrxanKerimov"));
