// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Your logo */}
      <img
        src="/assets/images/weather.jpg" // Update with the correct path
        alt="Weather App Logo"
        style={{ maxWidth: '100px', marginRight: '10px' }} // Adjust size
      />

      {/* Your website name */}
      <h1>Weather Forecast App</h1>
    </header>
  );
};

export default Header;
