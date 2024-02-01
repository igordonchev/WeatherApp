import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import TemperatureUnitToggle from '../components/TemperatureUnitToggle'; // Import the new component
import '../styles/common.css';

const CurrentLocationWeatherPage = () => {
  const [temperatureUnit, setTemperatureUnit] = useState('celsius'); // Default unit is Celsius

  const handleTemperatureUnitToggle = () => {
    // Toggle between Celsius and Fahrenheit
    setTemperatureUnit((prevUnit) => (prevUnit === 'celsius' ? 'fahrenheit' : 'celsius'));
  };

  return (
    <div className="current-location-weather-page">
      <Header />
      <Navigation />
      <div className="main-content">
        <h1>Current Location Weather</h1>
        <TemperatureUnitToggle
          unit={temperatureUnit}
          onToggle={handleTemperatureUnitToggle}
        />
        <CurrentLocationWeather temperatureUnit={temperatureUnit} /> {/* Pass the unit to the component */}
      </div>
    </div>
  );
};

export default CurrentLocationWeatherPage;
