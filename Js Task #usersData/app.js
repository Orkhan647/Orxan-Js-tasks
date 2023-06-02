const users=[
    {
        id:1, 
        username:"Ali",
        img:'ali',
        job:'Developer'
    },
    {
        id:2,
        username:'Bedbext Developer',
        img:'bedbext_developer',
        job:'Test1',
    },
    {
        id:3,
        username:'Duman',
        img:'duman',
        job:'Test3',
    },
    {
        id:4,
        username:'Js oyrenen shexs',
        img:'js_oyrenen_shexs',
        job:'Student',
    },
    {
        id:5,
        username:'Qarli Daglar',
        img:'qarli_daglar',
        job:'Test5',
    },
    {
        id:6,
        username:'Qoca Chinar',
        img:'qoca_cinar',
        job:'Test6',
    },
    {
        id:7,
        username:'Visselka',
        img:'visselka',
        job:'Test7',
    },
    {
        id:8,
        username:'Novxani',
        img:'novxani',
        job:'Test8',
    },
]


const topCardContainer = document.getElementById("top-cards");
const bottomCardContainer = document.getElementById("bottom-cards");

users.forEach((user, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = `img/${user.img}.jpg`; 
  image.classList.add("card-image"); 
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