"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  // for recettes
  // const html = `<article class="country">
  // <img class="country__img" src="${data.image_url}" />
  // <div class="country__data">
  // <h3 class="country__name">${data.code}</h3>
  // <h4 class="country__region">${data.code}</h4>
  // <p class="country__row"><span>👫</span>${(
  //   +data.population / 1000000
  // ).toFixed(1)}</p>
  //   <p class="country__row"><span>🗣️</span>${data.code}</p>
  //   <p class="country__row"><span>💰</span>${data.code}</p>
  //   </div>
  //   </article>`;

  // for country
  const html = `
    <article class="country" ${className}>
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages}</p>
        <p class="country__row"><span>💰</span>${data.currencies}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   // request.open("GET", `http://127.0.0.1:5000/recettes/${country}`);
//   request.send();
//   console.log(request.responseText);

//   request.addEventListener("load", function () {
//     // AJAX call country 1
//     const [data] = JSON.parse(this.responseText); //for country
//     // const data = JSON.parse(this.responseText); //for recettes
//     console.log(this.responseText);
//     console.log(data);

//Render country 1
// renderCountry(data);

// Get neighbour country
//     const [neighbour] = data.borders;
//     console.log(neighbour);

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     console.log(request2.responseText);

//     request2.addEventListener("load", function () {
//       // AJAX call country 1
//       const [data2] = JSON.parse(this.responseText); //for country
//       console.log(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// // getCountryAndNeighbour("morocco");
// // getCountryAndNeighbour("usa");
// // getCountryAndNeighbour("portugal");
// // getCountryAndNeighbour("egypt");
// // getCountryAndNeighbour("french");
// // getCountryData("5ed6604591c37cdc054bcc13");
// // getCountryData("5ed6604591c37cdc054bcd09");

// setTimeout(() => {
//   console.log("second 1 passed");
// }, 1000);

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/portugal`);
// request.send();

// const request = fetch("https://restcountries.com/v3.1/name/portugal");
// console.log(request);

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    console.log(response);
    if (!response.ok) throw new error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new error(`No neighbour found`);
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      // renderError(`something went wrong 💥💥 ${err}. Try again!`);
    });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok)
//         throw new error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       console.log(response);
//       if (!response.ok)
//         throw new error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       // renderError(`something went wrong 💥💥 ${err}. Try again!`);
//     });
// };

btn.addEventListener("click", function () {
  getCountryData("morocco");
  // getCountryData("usa");
  // getCountryData("australia");
});
// try {
//   let x = 1;
//   const y = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
