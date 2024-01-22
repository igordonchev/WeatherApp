// WeatherCurrent.js
import React from 'react';

const WeatherCurrent = ({ currentWeather, locationName }) => {
  // Check if currentWeather is defined before accessing its properties
  if (!currentWeather) {
    return <div>Loading...</div>; // or any other loading indicator or message
  }

  const { main, weather } = currentWeather;

  return (
    <div>
      <h2>Current Weather in {locationName}</h2>
      <p>Temperature: {main && main.temp}°C</p>
      <p>Humidity: {main && main.humidity}%</p>
      <p>Description: {weather && weather[0].description}</p>
    </div>
  );
};

export default WeatherCurrent;
