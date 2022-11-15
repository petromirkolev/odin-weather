export default function renderView(result) {
  console.log(result);

  const view = `
<h1>Sofia</h1>
<h3>
  The weather in ${result.name} is currently misty
  <img src="http://openweathermap.org/img/w/${result.weather[0].icon}.png" alt="weather-image" />
</h3>
<ul class="weather-data">
  <!-- 🥶🥵🙂🌪☀️🌤⛅️🌥☁️🌦🌧⛈🌩🌨🌬❄️☃️💧💨💦☔️☂️🌫 -->
  <div class="element">
    <h3>The current temperature is</h3>
    <li>🌡 ${result.main.temp}℃</li>
  </div>
  <div class="element">
    <h3>Feels like</h3>
    <li>🥶 10℃</li>
  </div>
  <div class="element">
    <h3>Humidity</h3>
    <li>💦 pre10%</li>
  </div>
  <div class="element">
    <h3>Pressure</h3>
    <li>🏋🏾 1018</li>
  </div>
  <div class="element">
    <h3>Wind</h3>
    <li>🌬 1.03 kmph 0°</li>
  </div>
</ul>
`;

  document.querySelector('.main').style.display = 'none';

  document.querySelector('.result').style.display = 'flex';

  document.querySelector('.result').insertAdjacentHTML('afterbegin', view);
}
