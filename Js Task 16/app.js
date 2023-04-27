let ed1 = +prompt("Zəhmət olmasa 1-ci ədədi daxil edin:");
let ed2 = +prompt("Zəhmət olmasa 2-ci ədədi daxil edin:");
let ed3 = +prompt("Zəhmət olmasa 3-cü ədədi daxil edin:");

let cem = ed1 + ed2 + ed3;

if (cem > 100) {
  console.log("Ədədlərin cəmi 100-dən böyükdür.");
} else if (cem < 100) {
  console.log("Ədədlərin cəmi 100-dən kiçikdir.");
} else if (cem === 100) {
  console.log("Ədədlərin cəmi 100-ə bərabərdir.");
} else {
  console.log("Düzgün bir ədəd daxil edilməyib.");
}
