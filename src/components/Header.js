// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Link to the home page */}
      <Link to="/">
        <img
          src="/assets/images/weather.jpg" // Update with the correct path
          alt="Weather App Logo"
          style={{ maxWidth: '100px', marginRight: '10px' }} // Adjust size
        />
      </Link>

      {/* Your website name */}
      <h1>Weather Forecast App</h1>
    </header>
  );
};

export default Header;
