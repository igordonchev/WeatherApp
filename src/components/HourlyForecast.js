// HourlyForecast.js
import React from 'react';

const HourlyForecast = ({ onFetchHourlyForecast }) => {
  const handleGetForecastClick = () => {
    // Make sure onFetchHourlyForecast is a function before calling it
    if (typeof onFetchHourlyForecast === 'function') {
      onFetchHourlyForecast(); // Call the function
    }
  };

  return (
    <div>
      <button onClick={handleGetForecastClick}>Get Hourly Forecast</button>
      {/* Rest of your component */}
    </div>
  );
};

export default HourlyForecast;
