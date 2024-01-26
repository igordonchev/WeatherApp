// WeatherForecast.js
import React, { useState, useEffect } from 'react';
import WeatherDetails from './WeatherDetails';
import api from './api'; // Import the api module or adjust the path accordingly
import '../styles/common.css'; // Add or adjust the path for the stylesheet

const WeatherForecast = () => {
  const [location, setLocation] = useState('');
  const [submittedLocation, setSubmittedLocation] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.get('/forecast', {
        params: {
          q: location,
        },
      });

      setForecastData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setForecastData(null);
      setError('Error fetching forecast data. Please try again later.');
    }

    // Set the submitted location, which will trigger the API call in WeatherDetails
    setSubmittedLocation(location);
  };

  const roundTemperature = (temperature) => Math.round(temperature);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter location"
          />
        </label>
        <button type="submit">Get Forecast</button>
      </form>

      {error && <p>{error}</p>}

      {forecastData && (
        <div>
          {Object.entries(forecastData.list.reduce((acc, item) => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(item);
            return acc;
          }, {})).map(([date, items]) => (
            <div key={date}>
              <h2>{date}</h2>
              {items.map((item) => (
                <div key={item.dt} className="forecast-item">
                  <p>{formatDate(item.dt)}</p>
                  <img
                    src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                  />
                  <p>{roundTemperature(item.main.temp)} °C</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <WeatherDetails location={submittedLocation} />
    </div>
  );
};

export default WeatherForecast;
