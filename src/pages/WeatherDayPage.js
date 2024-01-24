// WeatherDayPage.js
import React from 'react';
import WeatherDayDetails from '../components/WeatherDayDetails';

const WeatherDayPage = ({ match }) => {
  const dayNumber = match.params.dayNumber;

  // Fetch detailed information for the specified day or use mock data
  const detailedData = {
    date: new Date(),
    temperature: 20,
    humidity: 80,
    // Add more details as needed
  };

  return (
    <div>
      <h1>Weather Details for Day {dayNumber}</h1>
      <WeatherDayDetails
        date={detailedData.date}
        temperature={detailedData.temperature}
        humidity={detailedData.humidity}
      />
      {/* Add more components as needed */}
    </div>
  );
};

export default WeatherDayPage;
