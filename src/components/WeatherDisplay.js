// WeatherDisplay.js
import React, { useState } from 'react';
import { FaTemperatureHigh, FaCloud, FaTint, FaWind, FaArrowUp } from 'react-icons/fa';
import api from './api'; // Import api.js

const WeatherDisplay = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get('/weather', {
        params: {
          q: location,
        },
      });
      setWeatherData(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please check your location.'); // Set a meaningful error message
    }
  };

  const handleGetWeatherClick = () => {
    if (location.trim() !== '') {
      // Make sure the location is not empty before making the request
      fetchData();
    } else {
      // Handle empty location case, if needed
      setError('Please enter a valid location.');
    }
  };

  const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div>
      <h2>Weather in {location}</h2>
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleGetWeatherClick}>Get Weather</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <p>
            <FaTemperatureHigh /> Temperature: {weatherData.main.temp} °C
          </p>
          <p>
            <FaCloud /> Weather: {weatherData.weather[0].description}
          </p>
          <img
            src={getWeatherIcon(weatherData.weather[0].icon)}
            alt={weatherData.weather[0].description}
          />
          <p>
            <FaTint /> Humidity: {weatherData.main.humidity}%
          </p>
          <p>
            <FaWind /> Wind Speed: {weatherData.wind.speed} m/s{' '}
            <FaArrowUp style={{ transform: `rotate(${weatherData.wind.deg}deg)` }} />
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
