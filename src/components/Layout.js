import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import '../styles/common.css';

const Layout = ({ children }) => {
  return (
    <div className="weather-forecast-page-container">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
