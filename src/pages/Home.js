// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import '../styles/common.css';

const Home = () => {
  return (
    <div className="weather-forecast-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          <CurrentLocationWeather />
          {/* Include other components as needed */}
        </div>
      </div>
      {/* Make sure there is no manually added link here */}
    </div>
  );
};

export default Home;
