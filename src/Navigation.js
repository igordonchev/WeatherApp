// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/current-location">Current Location</Link>
        </li>
        <li>
          <Link to="/weather-display">Weather Display</Link>
        </li>
        <li>
          <Link to="/weather-forecast">Weather Forecast</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
