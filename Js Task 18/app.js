let eded = +prompt("Zehmet Olmasa Ededi Daxil Edin");

if (eded % 3 === 0 && eded % 5 === 0) {
  console.log("FizzBuzz");
} else if (eded % 3 === 0) {
  console.log("Fizz");
} else if (eded % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("ededi duzgun daxil edin");
}
