import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import '../styles/common.css'; // Import the common styles

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          {/* No welcome message */}
        </div>
        <div className="current-location-weather">
          <CurrentLocationWeather />
        </div>
      </div>
      <Link to="/current-location-weather">Go to Current Location Weather</Link>
    </div>
  );
};

export default Home;
