import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/current-location-weather">Current Location Weather</Link>
      <Link to="/five-day-forecast">Five Day Forecast</Link>
      <Link to="/map">Map</Link> {/* Add a link to MapPage */}
      <Link to="/animation">Animation</Link> {/* Add a link to AnimationPage */}
    </nav>
  );
};

export default Navigation;
