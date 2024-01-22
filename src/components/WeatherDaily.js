// WeatherDaily.js
import React from 'react';

const WeatherDaily = ({ dailyForecast }) => (
  <div>
    <h2>Five Days Forecast</h2>
    <ul>
      {dailyForecast.map((forecast, index) => (
        <li key={index}>
          {forecast.dt_txt}: {forecast.main.temp}°C, {forecast.weather[0].description}
        </li>
      ))}
    </ul>
  </div>
);

export default WeatherDaily;
