// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CurrentLocationWeatherPage from './pages/CurrentLocationWeatherPage';
import FiveDayForecastPage from './pages/FiveDayForecastPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-location-weather" element={<CurrentLocationWeatherPage />} />
        <Route path="/five-day-forecast" element={<FiveDayForecastPage />} />
      </Routes>
    </Router>
  );
};

export default App;
