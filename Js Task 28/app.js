let eded = +prompt(`Zehmet olmasa Eded daxil edin`);
let sum = 0;
for (let i = 100; i < 1000; i++) {
    if(i%eded===0)
    sum+=i
  }
console.log(eded+ `buyurun buda bolunenler`,sum)
