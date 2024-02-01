import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CurrentLocationWeatherPage from './pages/CurrentLocationWeatherPage';
import FiveDayForecastPage from './pages/FiveDayForecastPage';
import MapPage from './pages/MapPage'; // Import the MapPage component
import AnimationPage from './pages/AnimationPage'; // Import the AnimationPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-location-weather" element={<CurrentLocationWeatherPage />} />
        <Route path="/five-day-forecast" element={<FiveDayForecastPage />} />
        <Route path="/map" element={<MapPage />} /> {/* Add this line for MapPage */}
        <Route path="/animation" element={<AnimationPage />} /> {/* Add this line for AnimationPage */}
      </Routes>
    </Router>
  );
};

export default App;
