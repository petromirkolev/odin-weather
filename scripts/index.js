import renderView from '../scripts/cityView.js';
import findCity from '../scripts/findCity.js';

export const APIkey = '2a1fe94692f2f79a55650497881126cf';

const loc = navigator.geolocation.getCurrentPosition(loc => loc);

// Find city through search input
document.querySelector('.submit').addEventListener('click', async e => {
  const searchQuery = document.querySelector('#search-bar').value;
  const city = await findCity(searchQuery);
  renderView(city);
});

// Find city through current location
document.querySelector('.location').addEventListener('click', async e => {
  console.log(loc);
});
