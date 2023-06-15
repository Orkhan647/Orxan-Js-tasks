const url = "https://restcountries.com/v3.1/name/azerbaijan";
const rootElem = document.getElementById("root");
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const countryData = data[0];

    rootElem.innerHTML = `
      <img src="${countryData.flags.png}" alt="${countryData.name.common} Flag">
      <img src="https://mainfacts.com/media/images/coats_of_arms/az.svg" alt="${
        countryData.name.common
      } Coat of Arms" width="150" height="150">
      <p>Name: ${countryData.name.common}</p>
      <p>Capital: ${countryData.capital[0]}</p>
      <p>Region: ${countryData.region}</p>
      <p>Population: ${countryData.population.toLocaleString()}</p>
      <p>Bordesrs: ${countryData.borders}</p>
      <p>Timezone: ${countryData.timezones}</p>
      <p>Currency: ${Object.keys(countryData.currencies)[0]}</p>
    `;

    console.log(countryData);
  });
