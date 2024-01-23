// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WeatherForecastPage from './pages/WeatherForecastPage';
import CurrentLocationWeatherPage from './pages/CurrentLocationWeatherPage';
import HourlyForecastPage from './pages/HourlyForecastPage'; // Make sure the path is correct
import DailyForecastPage from './pages/DailyForecastPage'; // Make sure the path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-forecast" element={<WeatherForecastPage />} />
        <Route path="/current-location-weather" element={<CurrentLocationWeatherPage />} />
        <Route path="/hourly-forecast" element={<HourlyForecastPage />} />
        <Route path="/daily-forecast" element={<DailyForecastPage />} />
      </Routes>
    </Router>
  );
};

export default App;
