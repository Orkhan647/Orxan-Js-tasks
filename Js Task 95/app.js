const btn_gray = document.getElementById("btn_gray");
const btn_red = document.getElementById("btn_red");
const btn_blue = document.getElementById("btn_blue");
const btn_yellow = document.getElementById("btn_yellow");

btn_gray.onclick = () => {
  document.body.style.backgroundColor = "gray";
};
btn_red.onclick = () => {
  document.body.style.backgroundColor = "red";
};
btn_blue.onclick = () => {
  document.body.style.backgroundColor = "blue";
};
btn_yellow.onclick = () => {
  document.body.style.backgroundColor = "yellow";
};
