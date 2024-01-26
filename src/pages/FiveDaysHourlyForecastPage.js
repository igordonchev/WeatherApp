// FiveDaysHourlyForecastPage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FiveDaysHourlyForecast from '../components/FiveDaysHourlyForecast';  // Adjust the path accordingly
import '../styles/common.css';

const FiveDaysHourlyForecastPage = () => {
  return (
    <div className="five-days-hourly-forecast-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          <h1>Five Days Hourly Forecast</h1>
          <FiveDaysHourlyForecast />
          {/* Add other content specific to the Five Days Hourly Forecast page */}
        </div>
      </div>
    </div>
  );
};

export default FiveDaysHourlyForecastPage;
