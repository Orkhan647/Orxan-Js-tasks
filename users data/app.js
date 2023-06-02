const users=[
    {
        id:1, 
        username:"Ali",
        img:'ali',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'bedbext_developer',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'duman',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'js_oyrenen_shexs',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'qarli_daglar',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'qoca_cinar',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'visselka',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'novxani',
        job:'test8',
    },
]


const topCardContainer = document.getElementById("top-cards");
const bottomCardContainer = document.getElementById("bottom-cards");

users.forEach((user, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = `img/${user.img}.jpg`; // Assuming the images have jpg extension and are named as "ali.jpg", "bedbext_developer.jpg", etc.
  image.classList.add("card-image"); // Add a class to the image element
  card.appendChild(image);

  const username = document.createElement("h3");
  username.textContent = user.username;
  card.appendChild(username);

  const job = document.createElement("p");
  job.textContent = user.job;
  card.appendChild(job);

  if (index < users.length / 2) {
    topCardContainer.appendChild(card);
  } else {
    bottomCardContainer.appendChild(card);
  }
});