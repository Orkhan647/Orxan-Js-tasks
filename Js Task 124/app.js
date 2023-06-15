const url = "https://api.github.com/users/fidanabbasova/repos";
const rootElem = document.getElementById("root");
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.slice(0, 10).forEach((repo) => {
      rootElem.innerHTML += `<p>Repo Name: ${repo.name}</p>`;
    });
  });
