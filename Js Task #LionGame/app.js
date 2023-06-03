const lion = document.querySelector("img");
const cage = document.querySelector("div");

window.addEventListener("mousemove", (e) => {
  lion.style.top = `${e.y - 180}px`;
  lion.style.left = `${e.x - 180}px`;

  const lionRect = lion.getBoundingClientRect();
  const cageRect = cage.getBoundingClientRect();

  if (
    lionRect.left >= cageRect.left &&
    lionRect.right <= cageRect.right &&
    lionRect.top >= cageRect.top &&
    lionRect.bottom <= cageRect.bottom
  ) {
    document.body.style.backgroundColor = "red";
    
  } else {
    document.body.style.backgroundColor = "white";
  }
});
