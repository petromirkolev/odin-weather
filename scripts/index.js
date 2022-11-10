const APIkey = '2a1fe94692f2f79a55650497881126cf';

const loc = navigator.geolocation.getCurrentPosition(loc => loc);
const cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=sofia&limit=2&appid=${APIkey}`;

async function findCity(url) {
  const data = await fetch(url);
  const res = await data.json();
  storeCity(res[0]);
}

const storeCity = city => {
  let [lat, lon] = [city.lat, city.lon];
};

findCity(cityURL);

// const coordsURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

// find city

// get coords

// store coords and call dom controller

// update interface
