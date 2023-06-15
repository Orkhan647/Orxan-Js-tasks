const url = "https://api.github.com/users/Ali-GreenHeart";
const rootElem = document.getElementById("root");
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const imgElem = document.createElement("img");
    imgElem.src = data.avatar_url;
    rootElem.appendChild(imgElem);

    const loginElem = document.createElement("p");
    loginElem.innerHTML = `Login: ${data.name}<br>
Followers: ${data.followers} <br>
 Following: ${data.following} <br>
 Repositories: ${data.public_repos}
 `;
    rootElem.appendChild(loginElem);
  });
