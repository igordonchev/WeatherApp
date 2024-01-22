// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/weather-forecast">Weather Forecast</Link>
        <Link to="/current-location-weather">Current Location Weather</Link>
        <Link to="/hourly-forecast">Hourly Forecast</Link> {/* Add this line */}
        <Link to="/daily-forecast">Daily Forecast</Link> {/* Add this line */}
      </nav>
    </div>
  );
};

export default Navigation;
