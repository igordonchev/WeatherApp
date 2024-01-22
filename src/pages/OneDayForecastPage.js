// OneDayForecast.js
import React from 'react';

const OneDayForecast = ({ forecastData }) => {
  // Check if forecastData is defined before destructuring
  const { date, temperature, description } = forecastData || {};

  return (
    <div>
      <h2>One Day Forecast</h2>
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

export default OneDayForecast;