// WeatherForecastPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Add this line to import Link
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
      {/* Add any additional elements or links as needed */}
      <Link to="/current-location-weather">Go to Current Location Weather</Link>
    </div>
  );
};

export default WeatherForecastPage;
