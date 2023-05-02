function gender(cins, ad) {
  if (cins === "K") {
    return (ad) => {
      console.log(`Welcome Mr. ${ad}`);
    };
  } else if (cins === "Q") {
    return (ad) => {
      console.log(`Welcome Mrs. ${ad}`);
    };
  } 
}
const forMan = gender("K");
const forWoman = gender("Q");


forMan('Orxan')
forWoman('Pakize')