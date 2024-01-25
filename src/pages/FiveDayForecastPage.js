// WeatherForecastPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import WeatherForecast from '../components/WeatherForecast';
import '../styles/common.css';

const WeatherForecastPage = () => {
  return (
    <div className="weather-forecast-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          {/* Use the WeatherForecast component here */}
          <WeatherForecast />
        </div>
      </div>
      
    </div>
  );
};

export default WeatherForecastPage;
