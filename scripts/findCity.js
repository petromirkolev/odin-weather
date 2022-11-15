import { APIkey } from '../scripts/index.js';

export default async function findCity(searchQuery) {
  const data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=2&appid=${APIkey}`
  );
  const res = await data.json();
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=${APIkey}`
  );
  const city = await result.json();
  return city;
}
