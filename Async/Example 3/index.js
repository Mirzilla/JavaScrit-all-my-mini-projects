"use strict";

const gerUserposition = function () {
  return new Promise(function (res, rej) {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

const getCountryData = async function (countryName) {
  const userPosition = await gerUserposition();

  const { latitide: lat, longitude: lng } = userPosition.coords;

  const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

  const geocodingData = await geoRes.json();

  console.log(geocodingData);

  const response = await fetch(
    `https://restcountries.com/v3.1/name/${geocodingData.country.toLowerCase()}`
  );
  const data = await response.json();
};
const ukraine = getCountryData("ukraine");
