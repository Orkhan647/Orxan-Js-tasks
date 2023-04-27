let eded = prompt("Zəhmət olmasa, bir ve ya iki reqemli ədəd daxil edin:");
if (!isNaN(eded) && eded >= 10 && eded <= 99) {
  console.log("eded iki reqemlidir");
} else if (!isNaN(eded) && eded >= 0 && eded <= 9) {
  console.log("eded tek reqemlidir");
} else {
  console.log("ədəd düzgün daxil edilməyib");
}
