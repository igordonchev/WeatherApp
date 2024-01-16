// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Welcome to the Weather App!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather-forecast">Weather Forecast</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
