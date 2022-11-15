import renderView from '../scripts/cityView.js';
import findCity from '../scripts/findCity.js';

const query = document.querySelector.bind(document);

// Set default parameters
let imperial = false;
let metric = true;
let city;

// Imperial/Metric switcher
query('.imperial').addEventListener('click', async () => {
  imperial = true;
  metric = false;
  renderView(city);
});
query('.metric').addEventListener('click', async () => {
  imperial = false;
  metric = true;
  renderView(city);
});

// Find city through search input
query('.submit').addEventListener('click', async () => {
  city = await findCity();
  renderView(city);
});

// Find city through current location
query('.location').addEventListener('click', async () => {
  // To do on personal mac
});

// Find another city
query('.another-city').addEventListener('click', async () => {
  query('.main').style.display = 'grid';
  query('.result').style.display = 'none';
});

export { imperial, metric };
