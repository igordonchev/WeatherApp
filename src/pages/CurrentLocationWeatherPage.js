import React from 'react';
import Header from '../components/Header';
import WeatherForecast from '../components/WeatherForecast';
import CurrentLocationWeather from '../components/CurrentLocationWeather'; // Import the CurrentLocationWeather component

const CurrentLocationWeatherPage = () => {
  return (
    <div>
      <Header />
      <h1>Current Location Weather</h1>
      <CurrentLocationWeather />
    </div>
  );
};

export default CurrentLocationWeatherPage;
