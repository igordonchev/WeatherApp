import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WeatherForecastPage from './pages/WeatherForecastPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header showHeader={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather-forecast" element={<WeatherForecastPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
