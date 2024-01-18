// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WeatherForecastPage from './pages/WeatherForecastPage';
import CurrentLocationWeatherPage from './pages/CurrentLocationWeatherPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-forecast" element={<WeatherForecastPage />} />
        <Route path="/current-location-weather" element={<CurrentLocationWeatherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
