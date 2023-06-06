const carousel = document.querySelector(".carousel");

const lt_arrow = document.createElement("button");
lt_arrow.className = "arrow_btn lt_arrow";
lt_arrow.innerHTML = "&lt;";

const gt_arrow = document.createElement("button");
gt_arrow.className = "arrow_btn gt_arrow";
gt_arrow.innerHTML = "&gt;";
carousel.appendChild(lt_arrow);
carousel.appendChild(gt_arrow);

const carouselData = [
  {
    id: 1,
    title: "Item1",
    img: "https://i.insider.com/60144416a7c0c4001991ddf5?width=1000&format=jpeg&auto=webp",
  },
  {
    id: 2,
    title: "Item2",
    img: "https://thumbs.dreamstime.com/b/web-computer-code-abstract-background-big-size-58602086.jpg",
  },
  {
    id: 3,
    title: "Item3",
    img: "https://img.freepik.com/free-vector/digital-binary-code-numbers-background_1017-30371.jpg?w=2000",
  },
  {
    id: 4,
    title: "Item4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DgTt6xJKBzrtjxlkI94KmX4HQO5XJc-hbA&usqp=CAU",
  },
  {
    id: 5,
    title: "Item5",
    img: "https://www.lifewire.com/thmb/FLUx7EC-9Zrv7aMQuH1qmM5o7Ww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-binary-and-how-does-it-work-4692749-1-1eaec2e636424e71bb35419ef8d5005b.png",
  },
  {
    id: 6,
    title: "Item6",
    img: "https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/everything-as-code.jpg?itok=AgzV4Ew2",
  },
  {
    id: 7,
    title: "Item7",
    img: "https://media.licdn.com/dms/image/C4E1BAQG5Su_c4f8CqQ/company-background_10000/0/1520011697055?e=1686074400&v=beta&t=9rx0jwT21DH_u-PY8-mJD0zWaQIWpiNu43QkBC9wAE0",
  },
];

let f = 0;

carouselData.slice(f, f + 4).forEach((data) => createCarouselItem(data));

lt_arrow.onclick = () => {
  f--;
  updateCarousel();
};

gt_arrow.onclick = () => {
  f++;
  updateCarousel();
};

function updateCarousel() {
  carousel.innerHTML = "";
  carousel.appendChild(lt_arrow);
  carousel.appendChild(gt_arrow);
  
  if (f < 0) {
    f = carouselData.length - 1;
  } else if (f >= carouselData.length) {
    f = 0;
  }
  
  const items = [
    carouselData[(f + carouselData.length - 1) % carouselData.length],
    carouselData[f],
    carouselData[(f + 1) % carouselData.length],
    carouselData[(f + 2) % carouselData.length]
  ];

  items.forEach((data) => createCarouselItem(data));
}

function createCarouselItem(data) {
  const carouselItem = document.createElement("div");
  carouselItem.className = "carousel_item";
  carouselItem.id = `item${data.id}`;

  const title = document.createElement("h1");
  title.textContent = data.title;

  const img = document.createElement("img");
  img.src = data.img;

  carouselItem.append(title, img);
  carousel.appendChild(carouselItem);
}
