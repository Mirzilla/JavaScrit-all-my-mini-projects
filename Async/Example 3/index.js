"use strict";

// const gerUserposition = function () {
//   return new Promise(function (res, rej) {
//     navigator.geolocation.getCurrentPosition(res, rej);
//   });
// };

// const getCountryData = async function () {
//   try {
//     const userPosition = await gerUserposition();

//     const { latitide: lat, longitude: lng } = userPosition.coords;

//     const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

//     const geocodingData = await geoRes.json();

//     console.log(geocodingData);

//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${geocodingData.country.toLowerCase()}`
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.error(e.message);
//   }
// };
// const ukraine = getCountryData("ukraine");

const getDataAndConvertToJSON = function (
  url,
  errorMessage = "Что-то пошло не так 🧐."
) {
  return fetch(url).then((response) => {
    if (!response.ok)
      throw new Error(`${errorMessage} Ошибка ${response.status}`);
    return response.json();
  });
};

const print3CountriesCapitals = async function (counry1, counry2, counry3) {
  try {
    // const [country1Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${counry1}`
    // );
    // const [country2Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${counry2}`
    // );
    // const [country3Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${counry3}`
    // );

    // console.log([
    //   country1Data.capital,
    //   country2Data.capital,
    //   country3Data.capital,
    // ]);

    const countriesData = await Promise.all([
      getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry1}`),
      getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry2}`),
      getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/${counry3}`),
    ]);

    console.log(countriesData.map((countryData) => countryData[0].capital));
  } catch (e) {
    console.error(e);
  }
};

print3CountriesCapitals("ukraine", "india", "canada");
