import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Adjust the path based on your project structure

const Header = () => {
  return (
    <header>
      {/* Link to the home page */}
      <Link to="/">
        <img
          src="/assets/images/weather.jpg" // Update with the correct path
          alt="Weather App Logo"
          className="logo" // Apply the logo class
        />
      </Link>

      {/* Your website name */}
      <h1>Weather Forecast App</h1>
    </header>
  );
};

export default Header;
