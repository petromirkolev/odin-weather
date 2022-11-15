const APIkey = '2a1fe94692f2f79a55650497881126cf';
const loc = navigator.geolocation.getCurrentPosition(loc => loc);
// http://openweathermap.org/img/w/02d.png

// If search is used
document.querySelectorAll('.submit')[1].addEventListener('click', async e => {
  const searchQuery = document.querySelector('#search-bar').value;
  const cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=sofia&limit=2&appid=${APIkey}`;

  // const cityURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=2&appid=${APIkey}`;
  const city = await findCity(cityURL);
  const result = await findCity(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=${APIkey}`
  );
  console.log(result.main);
  console.log(result.weather);
  console.log(result.wind);
});

// Find city function
async function findCity(url) {
  const data = await fetch(url);
  const res = await data.json();
  return res;
}
