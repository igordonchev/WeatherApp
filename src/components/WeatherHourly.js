// WeatherHourly.js
import React from 'react';

const WeatherHourly = ({ hourlyForecast }) => (
  <div>
    <h2>Hourly Forecast</h2>
    <ul>
      {hourlyForecast.map((forecast, index) => (
        <li key={index}>
          {forecast.dt_txt}: {forecast.main.temp}°C, {forecast.weather[0].description}
        </li>
      ))}
    </ul>
  </div>
);

export default WeatherHourly;
