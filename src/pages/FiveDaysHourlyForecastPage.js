// FiveDaysHourlyForecastPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FiveDaysHourlyForecast from '../components/FiveDaysHourlyForecast'; // Updated import
import '../styles/common.css';

const FiveDaysHourlyForecastPage = () => {
  return (
    <div className="five-days-hourly-forecast-page"> {/* Updated class name */}
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          {/* Updated component name */}
          <FiveDaysHourlyForecast />
        </div>
      </div>
      {/* Add any additional elements or links as needed */}
      <Link to="/current-location-weather">Go to Current Location Weather</Link>
    </div>
  );
};

export default FiveDaysHourlyForecastPage;
