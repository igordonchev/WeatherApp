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
          <Link to="/weather-forecast">Weather Forecast</Link>
        </li>
        <li>
          <Link to="/current-location-weather">Current Location Weather</Link>
        </li>
        <li>
          <Link to="/hourly-forecast">Hourly Forecast</Link>
        </li>
        <li>
          <Link to="/daily-forecast">Daily Forecast</Link>
        </li>
        <li>
          <Link to="/five-day-forecast">Five Day Forecast</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
