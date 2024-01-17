import React from 'react';
import Header from '../components/Header';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import WeatherForecast from './WeatherForecastPage';

const Home = () => {
  return (
    <div>
      <Header showHeader={true} /> {/* Pass a prop to indicate whether to show the header */}
      <CurrentLocationWeather />
      <WeatherForecast />
    </div>
  );
};

export default Home;
