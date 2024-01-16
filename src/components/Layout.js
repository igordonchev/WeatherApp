// components/Layout.js
import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import WeatherForecast from '../pages/WeatherForecast';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherForecast />} />
      </Routes>
    </div>
  );
};

export default Layout;
