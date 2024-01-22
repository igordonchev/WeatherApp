// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WeatherForecastPage from './pages/WeatherForecastPage';
import CurrentLocationWeatherPage from './pages/CurrentLocationWeatherPage';
import HourlyForecastPage from './pages/HourlyForecastPage';
import DailyForecastPage from './pages/DailyForecastPage';
import OneDayForecastPage from './pages/OneDayForecastPage'; // Add this line
import FiveDayForecastPage from './pages/FiveDayForecastPage'; // Add this line

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-forecast" element={<WeatherForecastPage />} />
        <Route path="/current-location-weather" element={<CurrentLocationWeatherPage />} />
        <Route path="/hourly-forecast" element={<HourlyForecastPage />} />
        <Route path="/daily-forecast" element={<DailyForecastPage />} />
        <Route path="/one-day-forecast" element={<OneDayForecastPage />} /> {/* Add this line */}
        <Route path="/five-day-forecast" element={<FiveDayForecastPage />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;
