// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/weather-forecast">Weather Forecast</Link>
    </nav>
  );
};

export default Navigation;
