// DailyForecast.js
import React from 'react';

const DailyForecast = ({ dailyData }) => {
  return (
    <div>
      <h2>Daily Forecast</h2>
      {dailyData.map((item) => (
        <div key={item.dt}>
          <p>Date: {item.dt_txt}</p>
          <p>Temperature: {item.main.temp} °C</p>
          <p>Weather: {item.weather[0].description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
