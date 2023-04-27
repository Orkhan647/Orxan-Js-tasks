const vezife = prompt(`Zehmet Olmasa Vezifenizi Daxil Edin
Admin
User
Guest`);

switch (vezife) {
  case "Admin":
    console.log("Xosh Gelmisen Admin");
    break;
  case "User":
    console.log("Seni Yeniden Gormeyime Shadam ;)");
    break;
  case "Guest":
    console.log("Qonaqsan Ozuvu Biraz Yaxsi Apar >.<");
    break;
  default:
    console.log("Seni tanimiram");
}
