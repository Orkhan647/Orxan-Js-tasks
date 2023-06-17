const url = "https://catfact.ninja/facts";
const factContainer = document.getElementById("factContainer");
const factButton = document.getElementById("factButton");

factButton.addEventListener("click", () => {
  axios.get(url).then(({ data }) => {
    const facts = data.data;
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex].fact;

    factContainer.textContent = randomFact;
  });
});
