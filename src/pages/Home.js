// Home.js
import React from 'react';
import Header from '../components/Header'; // Adjust the path accordingly
import CurrentLocationWeather from '../pages/CurrentLocationWeather'; // Adjust the path accordingly
import WeatherForecast from '../pages/WeatherForecast'; // Adjust the path accordingly

const Home = () => {
  return (
    <div>
      <Header />
      {/* Add your navigation menu */}
      <CurrentLocationWeather />
      <WeatherForecast />
    </div>
  );
};

export default Home;
