// WeatherDayDetails.js
import React from 'react';

const WeatherDayDetails = ({ date, temperature, humidity }) => {
  return (
    <div>
      <h2>{date.toLocaleString()}</h2>
      <p>Temperature: {temperature} °C</p>
      <p>Humidity: {humidity}%</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default WeatherDayDetails;
