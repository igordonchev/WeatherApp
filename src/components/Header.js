// Header.js
import React from 'react';
import '../styles/common.css'; // Import the common styles

const Header = () => {
  return (
    <header>
      {/* Your logo as a link to the home page */}
      <a href="/" className="logo-link">
        <img
          src="/assets/images/weather.jpg" // Update with the correct path
          alt="Weather App Logo"
        />
      </a>
      
      {/* Your website name */}
      <h1>Weather Forecast App</h1>
    </header>
  );
};

export default Header;
