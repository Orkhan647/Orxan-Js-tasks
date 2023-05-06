const currentYear = +prompt("Hal Hazirki Ili daxil edin");
const dateOfBirth = +prompt("Dogum İlinizi qeyd edin");

const converter = () => {
  return ` Bu ile qeder ${
    (currentYear - dateOfBirth) * 365
  } gundur ki yasayirsiniz ;) `;
};

console.log(converter());
