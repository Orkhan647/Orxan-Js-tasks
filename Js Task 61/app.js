const fullName = prompt(
  "Zəhmət olmasa tam adinizi daxil edin (AD SOYAD formatinda):"
);
const formattedName = fullName.split(" ").reverse().join(" ");

console.log(formattedName);
