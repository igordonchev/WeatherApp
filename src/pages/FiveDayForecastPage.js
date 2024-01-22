// FiveDayForecast.js
import React from 'react';

const FiveDayForecast = ({ forecastData }) => {
  // Check if forecastData is defined before destructuring
  const { date, temperature, description } = forecastData || {};

  return (
    <div>
      <h2>Five Day Forecast</h2>
      {date && (
        <div>
          <p>Date: {date}</p>
          <p>Temperature: {temperature}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
  );
};

export default FiveDayForecast;
