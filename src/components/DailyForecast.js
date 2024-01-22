import React from 'react';

const DailyForecast = ({ dailyData }) => {
  return (
    <div>
      <h2>Daily Forecast</h2>
      {dailyData.map((item) => (
        <div key={item.dt}>
          <p>Date: {formatDate(item.dt)}</p>
          <p>Temperature: {item.main.temp} °C</p>
          <p>Weather: {item.weather[0].description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

// Function to format the date from UNIX timestamp
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export default DailyForecast;
