let mnth = prompt("Zehmet olmasa hansi ay oldugunu daxil edin");
let month = () => {
  switch (mnth) {
    case "01":
      return "Yanvar";
    case "02":
      return "Fevral";
    case "03":
      return "Mart";
    case "04":
      return "Aprel";
    case "05":
      return "May";
    case "06":
      return "Iyun";
    case "07":
      return "Iyul";
    case "08":
      return "Avqust";
    case "09":
      return "Sentyabr";
    case "10":
      return "Oktyabr";
    case "11":
      return "Noyabr";
    case "12":
      return "Dekabr";
    default:
      return "Yalnis daxiletma";
  }
};
console.log(month());