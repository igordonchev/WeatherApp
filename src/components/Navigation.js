// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      {/* Remove the link to Weather Forecast Page */}
      <Link to="/current-location-weather">Current Location Weather</Link>
      <Link to="/five-day-forecast">Five Day Forecast</Link>
    </nav>
  );
};

export default Navigation;
