// WeatherDisplayPage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import WeatherDisplay from '../components/WeatherDisplay';
import '../styles/common.css';

const WeatherDisplayPage = () => {
  return (
    <div className="weather-display-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          {/* Use the WeatherDisplay component here */}
          <WeatherDisplay />
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplayPage;
