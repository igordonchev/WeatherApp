import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/current-location-weather">Current Location Weather</Link>
      <Link to="/five-day-forecast">Five Day Forecast</Link>
      {/* Add a link to MapPage */}
      <Link to="/map">Map</Link>
    </nav>
  );
};

export default Navigation;
