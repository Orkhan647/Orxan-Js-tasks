const il = prompt("İl daxil edin:");
console.log(`İl ${il % 4 == 0 && (il % 100 != 0 || il % 400 == 0) ? 'uzun ildir' : 'uzun il deyil'}`);
