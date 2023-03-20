const displayCountryByGPS = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Проблема с геокодированием (ошибка ${response.status})`
        );
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
        "Страна не найдена."
      );
    })
    .then((data) => displayCountry(data[0]))
    .catch((e) => {
      console.error(`${e} 🧐`);
      displayError(`Что-то пошло не так 🧐: ${e.message} Попробуйте ещё раз!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })

    .catch((e) => console.error(`${e.message} 🧐`));
};

displayCountryByGPS(35.756, 139.256);
displayCountryByGPS(48.857, 2.358);
displayCountryByGPS(40.708, -74.051);
