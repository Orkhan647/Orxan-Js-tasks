const word = prompt("sozu daxil et");
const tag = prompt("tag-i daxil edin");
const idName = document.getElementById("root");
idName.innerHTML = `<${tag}>${word}</${tag}>`;
