import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import DailyForecast from '../components/DailyForecast'; // Import DailyForecast component
import '../styles/common.css';

const DailyForecastPage = () => {
  // Example daily forecast data, replace this with your actual data
  const dailyData = [
    {
      dt: 1642640400, // Replace with your timestamp
      main: { temp: 25 }, // Replace with your temperature data
      weather: [{ description: 'Sunny' }], // Replace with your weather data
    },
    // Add more data as needed
  ];

  return (
    <div className="daily-forecast-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          <DailyForecast dailyData={dailyData} />
        </div>
      </div>
    </div>
  );
};

export default DailyForecastPage;
