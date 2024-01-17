// Header.js
import React from 'react';

const Header = ({ showHeader }) => {
  return (
    <div>
      {showHeader && (
        <header>
          <img src="/assets/images/logo.jpg" alt="Logo" />
          <h1>Your Personal Weather Forecast Hub</h1>
        </header>
      )}
    </div>
  );
};

export default Header;
