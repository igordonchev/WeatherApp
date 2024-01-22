// pages/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import WeatherDetails from '../components/WeatherDetails';
import LocationSelector from '../components/LocationSelector';
import '../styles/common.css';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Use browser's geolocation API to get the current user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleLocationSelect = (selectedLocation) => {
    setCurrentLocation(selectedLocation);
  };

  return (
    <div className="home">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          {currentLocation && (
            <WeatherDetails location={currentLocation} />
          )}
        </div>
      </div>
      <LocationSelector onSelectLocation={handleLocationSelect} />
    </div>
  );
};

export default Home;
