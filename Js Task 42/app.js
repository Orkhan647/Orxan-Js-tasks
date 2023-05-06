let num1 = +prompt("1ci ededi daxil edin");
let num2 = +prompt(`2ci ededi daxil edin`);
let calc = () => {
  console.log(`toplama cavabi:${num1 + num2}`);
  console.log(`cixma cavabi:${num1 - num2}`);
  console.log(`vurma cavabi:${num1 * num2}`);
  console.log(`bolme cavabi:${num1 / num2}`);
};
console.log(calc());
