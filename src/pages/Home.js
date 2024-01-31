// Home.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import CurrentLocationForecast from '../components/CurrentLocationForecast';
import LocationForm from '../components/LocationForm'; // Moved import
import '../styles/common.css';

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSubmit = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Layout>
      <div className="content-container home-page">
        <div className="main-content">
          <h1>Welcome to the Weather App!</h1>
          <CurrentLocationWeather />
          <CurrentLocationForecast />
          <LocationForm onLocationSubmit={handleLocationSubmit} />
          {selectedLocation && (
            <div>
              <CurrentLocationWeather selectedLocation={selectedLocation} />
              <CurrentLocationForecast selectedLocation={selectedLocation} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
