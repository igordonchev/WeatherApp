// Home.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import CurrentLocationForecast from '../components/CurrentLocationForecast';
import AnimationComponent from '../components/AnimationComponent';
import sunnyAnimationData from '../animations/sunny.json';
import '../styles/common.css';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

  const handleToggleUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === 'celsius' ? 'fahrenheit' : 'celsius'));
  };

  return (
    <Layout>
      <div className="content-container home-page">
        <div className="main-content">
          <h1>Welcome to the Weather App!</h1>

          <div>
            <button onClick={handleToggleUnit}>
              Toggle Temperature Unit ({temperatureUnit === 'celsius' ? 'Celsius' : 'Fahrenheit'})
            </button>
          </div>

          <CurrentLocationWeather
            selectedLocation={selectedLocation}
            temperatureUnit={temperatureUnit}
          />
          <CurrentLocationForecast
            selectedLocation={selectedLocation}
            temperatureUnit={temperatureUnit}
          />

          {selectedLocation && (
            <AnimationComponent animationData={sunnyAnimationData} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
