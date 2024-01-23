import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';

const Header = () => {
  return (
    <header>
      {/* Your logo as a link to the home page */}
      <Link to="/">
        <img
          src="/assets/images/weather.jpg" // Update with the correct path
          alt="Weather App Logo"
          style={{ maxWidth: '100px', maxHeight: '80px', marginRight: '10px' }}
        />
      </Link>
      
      {/* Your website name */}
      <h1>Weather Forecast App</h1>
    </header>
  );
};

export default Header;
