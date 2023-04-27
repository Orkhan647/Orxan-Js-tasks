let ed1 = +prompt(`zehmet olmasa ededi daxil edin`);
let operator = prompt(`Zehmet olmasa operator secin (+ - * /)`);
let ed2 = +prompt(`zehmet olmasa ededi daxil edin`);

switch (operator) {
  case "+":
    console.log(ed1 + ed2);
    break;
  case "-":
    console.log(ed1 - ed2);
    break;
  case "*":
    console.log(ed1 * ed2);
    break;
  case "/":
    console.log(ed1 / ed2);
    break;
  default:
    console.log("Bele operator desteklenmir");
}
