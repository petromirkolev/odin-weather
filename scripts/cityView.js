import { imperial, metric } from '../scripts/index.js';

const query = document.querySelector.bind(document);

export default function renderView(city) {
  document.querySelector('.main').style.display = 'none';
  document.querySelector('.result').style.display = 'flex';

  if (metric) {
    query('.city-name').textContent = city.name;
    query(
      '.weather-summary'
    ).innerHTML = `${city.name} is currently covered in ${city.weather[0].description} <img src="http://openweathermap.org/img/w/${city.weather[0].icon}.png"></img>`;
    query('.temperature').textContent = `${(city.main.temp - 273.15).toFixed(
      1
    )} ℃`;
    query('.feels-like').textContent = `${(
      city.main.feels_like - 273.15
    ).toFixed(1)} ℃`;
    query('.humidity').textContent = `${city.main.humidity} %`;
    query('.pressure').textContent = `${city.main.pressure} hPa`;
    query('.wind').textContent = `${city.wind.speed.toFixed(1)} kph`;
  }

  if (imperial) {
    query('.city-name').textContent = city.name;
    query(
      '.weather-summary'
    ).innerHTML = `${city.name} is currently covered in ${city.weather[0].description} <img src="http://openweathermap.org/img/w/${city.weather[0].icon}.png"></img>`;
    query('.temperature').textContent = `${(
      1.8 * (city.main.temp - 273) +
      32
    ).toFixed(1)} ℉`;
    query('.feels-like').textContent = `${(
      1.8 * (city.main.feels_like - 273) +
      32
    ).toFixed(1)} ℉`;
    query('.humidity').textContent = `${city.main.humidity} %`;
    query('.pressure').textContent = `${city.main.pressure} hPa`;
    query('.wind').textContent = `${(city.wind.speed * 0.621371192).toFixed(
      1
    )} mph`;
  }
}
