import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import WeatherForecast from '../components/WeatherForecast';
import '../styles/common.css';

const DailyForecastPage = () => {
  return (
    <div className="daily-forecast-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
};

export default DailyForecastPage;
