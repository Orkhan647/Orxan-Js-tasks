const fm = prompt(`Zehmet olmasa cinsinizi secin 
F-Female(kisi)
M-Male(qadin)`);
const gender = () => {
  switch (fm) {
    case "F":
      return "Female";
    case "M":
      return "Male";
    default:
      return "Cinsi duzgun daxil edin";
  }
};
console.log(gender());
