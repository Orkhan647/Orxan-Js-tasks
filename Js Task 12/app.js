let eded1 = +prompt("eded 1 daxil et");
let eded2 = +prompt("eded 2 daxil et");
let eded3 = +prompt("eded 3 daxil et");

let boyukEded = Math.max(eded1, eded2, eded3);

if (isNaN(eded1) || isNaN(eded2) || isNaN(eded3)) {
  console.log("Zehmet olmasa ededi duzgun daxil et...");
} else if (eded1 === eded2 && eded2 === eded3){
  console.log("Bu ededlər bir-birinə bərabərdir.");
} else {
  console.log(boyukEded + " ən böyükdür.");
}
