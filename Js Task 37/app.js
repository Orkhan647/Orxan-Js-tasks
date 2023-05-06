const bookPrice = +prompt("Kitabin Qiymeti");
const bookAmount = +prompt("Kitabin sayi");
const totalValue = () => {
  return "depodaki kitablarin umumi deyeri: " + bookPrice * bookAmount + "Azn";
};
console.log(totalValue());
