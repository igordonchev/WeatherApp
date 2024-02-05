// Layout.js
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import '../styles/common.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
