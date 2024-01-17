// WeatherForecastPage.js
import React from 'react';
import Header from '../components/Header';
import WeatherForecast from '../components/WeatherForecast';

const WeatherForecastPage = () => {
  return (
    <div>
      <Header showHeader={true} /> {/* Pass a prop to indicate whether to show the header */}
      <WeatherForecast />
    </div>
  );
};

export default WeatherForecastPage;
