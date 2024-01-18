// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        {/* Your navigation links go here */}
        <Link to="/">Home</Link>
        <Link to="/weather-forecast">Weather Forecast</Link>
        <Link to="/current-location-weather">Go to Current Location Weather</Link>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
};

export default Navigation;
