// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WeatherForecastPage from './pages/WeatherForecastPage';
import FiveDaysHourlyForecastPage from './pages/FiveDaysHourlyForecastPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-forecast" element={<WeatherForecastPage />} />
        <Route path="/five-days-hourly-forecast" element={<FiveDaysHourlyForecastPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
