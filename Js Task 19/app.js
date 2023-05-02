let Sifre = 40;
let UserinSifresi = +prompt(`Zehmet olmasa 0-dan 50ye qeder Eded daxil edin`);
let say = 1;
while (UserinSifresi !== Sifre) {
  say++;
  if (UserinSifresi > Sifre) {
    UserinSifresi = +prompt("asaqi eded daxil et");
  } else {
    UserinSifresi = +prompt("yuxari eded daxil et");
  }
}
if (say === 1) {
  console.log(`Tebrikler siz sifreni ${say} defeye tapdiniz sifre ${Sifre} idi 
  kapital Bank Terefinden hesabiniza 1000 Azn kocuruldu`);
} else if (say <= 5) {
  console.log(`Tebrikler siz sifreni ${say} defeye tapdiniz sifre ${Sifre} idi 
  kapital Bank Terefinden hesabiniza 750 Azn kocuruldu`);
} else if (say <= 9) {
  console.log(`Tebrikler siz sifreni ${say} defeye tapdiniz sifre ${Sifre} idi 
  kapital Bank Terefinden hesabiniza 500 Azn kocuruldu`);
} else {
  console.log("cehd sayi cox olduqundan siz BLOKLANDINIZ ! ! !");
}
