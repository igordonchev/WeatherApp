import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/current-location-weather">Current Location Weather</Link>
      <Link to="/five-day-forecast">Five Day Forecast</Link>
      <Link to="/map">Map</Link> {/* Add a link to MapPage */}
      {/* Commented out the line for Animation */}
      {/* <Link to="/animation">Animation</Link> */}
    </nav>
  );
};

export default Navigation;
