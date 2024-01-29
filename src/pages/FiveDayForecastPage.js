// FiveDayForecastPage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FiveDayForecast from '../components/FiveDayForecast'; // Update import
import '../styles/common.css';

const FiveDayForecastPage = () => {
  return (
    <div className="five-day-forecast-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          
          <FiveDayForecast />
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecastPage;
