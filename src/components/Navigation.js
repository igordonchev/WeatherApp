// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/weather-forecast">Weather Forecast</Link>
      <Link to="/current-location-weather">Current Location Weather</Link>
      <Link to="/five-day-forecast">Five Day Forecast</Link>
      {/* Remove the links for Hourly Forecast and Daily Forecast */}
    </nav>
  );
};

export default Navigation;
