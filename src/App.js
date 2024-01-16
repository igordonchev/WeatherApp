// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Assuming you have a Header component
import Home from './pages/Home';
import WeatherForecast from './pages/WeatherForecast';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherForecast />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
