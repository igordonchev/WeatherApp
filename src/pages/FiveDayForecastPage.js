import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FiveDayForecast from '../components/FiveDayForecast'; // Update import
import '../styles/common.css';

const FiveDayForecastPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleCurrentWeatherUpdate = (weatherData) => {
    setCurrentWeather(weatherData);
  };

  return (
    <div className="five-day-forecast-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          <FiveDayForecast onCurrentWeatherUpdate={handleCurrentWeatherUpdate} />
          
          {currentWeather && (
            <div>
              <h2>Current Weather</h2>
              <p>Location: {currentWeather.name}</p>
              <p>Temperature: {currentWeather.main.temp}°C</p>
              <p>Humidity: {currentWeather.main.humidity}%</p>
              <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
              {/* Add more current weather information as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecastPage;
