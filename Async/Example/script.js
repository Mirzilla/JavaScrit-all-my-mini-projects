"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////////////////////////////////////////////////////

const displayCountry = function (data, className = "") {
  const currencies = data.currencies;
  const currencyName = Object.values(currencies)[0].name;
  const currencySymbol = Object.values(currencies)[0].symbol;
  const languages = data.languages;
  const firstLanguage = Object.values(languages)[0];
  const secondLanguage = Object.values(languages)[1];

  let languagesString = firstLanguage;
  if (secondLanguage) {
    languagesString += `, ${secondLanguage}`;
  }

  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
      +data.population / 1000000
    ).toFixed(1)} milions</p>
    <p class="country__row"><span>🗣️</span>${languagesString}</p>
    <p class="country__row"><span>💰</span>${currencySymbol} ${currencyName}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const displayError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndBorderCountries = function (country) {
//   //Ajax call
//   const request1 = new XMLHttpRequest();
//   request1.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request1.send();
//   request1.addEventListener("load", function () {
//     const [data1] = JSON.parse(this.responseText);
//     console.log(data1);
//     //Display country

//     displayCountry(data1);
//     // Get first countries
//     const [firstNeighbour] = data1.borders;
//     if (!firstNeighbour) return;

//     //Ajax call
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       "GET",
//       `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
//     );
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//     });
//   });
// };

const getCoutnryData = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Страна не найдена. Ошибка ${response.status}`);
      return response.json();
    })
    .then((data) => {
      displayCountry(data[0]);
      const firstNeighbour = data[0].borders[0];

      if (!firstNeighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Страна не найдена. Ошибка ${response.status}`);
      return response.json();
    })
    .then((data) => displayCountry(data[0], "neighbour"))
    .catch((e) => {
      console.error(`${e} 🧐`);
      displayError(`Что-то пошло не так 🧐: ${e.message}. Попробуйте ещё раз!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCoutnryData("belarus");
