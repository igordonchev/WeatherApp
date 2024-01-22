import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import '../styles/common.css';

const LocationWeatherPage = ({ match }) => {
  // Use the match.params.location to get the selected location from the URL
  const selectedLocation = match.params.location;

  return (
    <div className="location-weather-page">
      <Header />
      <div className="content-container">
        <Navigation />
        <div className="main-content">
          <CurrentLocationWeather location={selectedLocation} />
          <Link to={`/location-one-day-forecast/${selectedLocation}`}>One Day Forecast</Link>
          <Link to={`/location-five-day-forecast/${selectedLocation}`}>Five Day Forecast</Link>
        </div>
      </div>
    </div>
  );
};

export default LocationWeatherPage;
