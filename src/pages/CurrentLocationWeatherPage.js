// CurrentLocationWeatherPage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import '../styles/common.css';

const CurrentLocationWeatherPage = () => {
  return (
    <div className="current-location-weather-page">
      <Header />
      <div className="content-container">
        <div className="main-content">
          <h1>Current Location Weather</h1>
          <CurrentLocationWeather />
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default CurrentLocationWeatherPage;
