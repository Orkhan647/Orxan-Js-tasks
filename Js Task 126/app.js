const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const rootElem = document.getElementById("root");

searchBtn.addEventListener("click", () => {
  const countryName = countryInput.value;
  const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const countryData = data[0];

        rootElem.innerHTML = `
          <img src="${countryData.flags.png}" alt="${countryData.name.common} Flag" width="200" height="150">
          <p>Name: ${countryData.name.common}</p>
          <p>Capital: ${countryData.capital[0]}</p>
          <p>Region: ${countryData.region}</p>
          <p>Population: ${countryData.population.toLocaleString()}</p>
          <p>Currency: ${Object.keys(countryData.currencies)[0]}</p>
        `;
      } else {
        rootElem.innerHTML = "Country not found.";
      }
    })
    
});

