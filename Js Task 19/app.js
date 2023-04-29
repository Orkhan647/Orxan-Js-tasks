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
switch (say){
    case 1:
        console.log(`Sifreni ${say} defeye tapdin Sifre bu idi:  ${Sifre}
Ve Kapital Bank Terefinden Hesabiniza 1000 Azn kocuruldu`);
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`Sifreni ${say} defeye tapdin Sifre bu idi:  ${Sifre}
Ve Kapital Bank Terefinden Hesabiniza 750 Azn kocuruldu`);
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        console.log(`Sifreni ${say} defeye tapdin Sifre bu idi:  ${Sifre}
Ve Kapital Bank Terefinden Hesabiniza 500 Azn kocuruldu`);
        break;
        case 10:
         console.log(`Sifreni ${say} defeye tapdin Sifre bu idi:  ${Sifre}
         Ve Kapital Bank Terefinden Hesabiniza 250 Azn kocuruldu`)
         break;
    default:
        console.log(`Cehd sayi cox olgudundan siz BLOKLANDINIZ ! ! !`);
        
}

