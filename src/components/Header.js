// Header.js
import React from 'react';
import '../styles/common.css'; // Adjust the import path based on your project structure

const Header = () => {
  return (
    <header>
      {/* Your logo */}
      <img
        src="/assets/images/weather.jpg" // Update with the correct path
        alt="Weather App Logo"
      />
      
      {/* Your website name */}
      <h1>Weather Forecast App</h1>
    </header>
  );
};

export default Header;
