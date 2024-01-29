// FiveDayForecast.js

import React, { useState } from 'react';
import api from './api'; // Adjust the path accordingly
import '../styles/common.css';

const FiveDayForecast = () => {
  const [location, setLocation] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetForecastClick = async () => {
    try {
      const response = await api.get('/forecast', {
        params: {
          q: location,  // Use the location name
        },
      });

      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setError('Error fetching forecast data. Please try again later.');
    }
  };

  return (
    <div>
      <h1>5-Day Forecast</h1>
      <form>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <button type="button" onClick={handleGetForecastClick}>
          Get Forecast
        </button>
      </form>
      {error && <p>{error}</p>}
      {forecastData && (
        <div>
          <h2>Forecast for {forecastData.city.name}</h2>
          {/* Display forecast information as needed */}
          {/* You can map through the list to display 3-hourly forecasts */}
          {forecastData.list.map((item, index) => (
            <div key={item.dt}>
              <p>
                {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(item.dt * 1000))}
                {', '}
                {new Date(item.dt * 1000).toLocaleDateString([], {
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: '24px', marginRight: '10px' }}>{Math.round(item.main.temp)}°C</p>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={`Weather icon for ${item.weather[0].description}`}
                />
                <p style={{ fontSize: '24px', marginLeft: '10px' }}>
                  {new Date(item.dt * 1000).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    hour12: false,
                    hourCycle: 'h23', // Display hours in 24-hour format
                  }).replace(/^0/, '')}H
                </p>
              </div>
              <p>{item.weather[0].description}</p>
              {/* Additional information from the API */}
              <p>Humidity: {item.main.humidity}%</p>
              <p>Wind Speed: {item.wind.speed} m/s</p>
              {/* Add more details as needed */}
              
              {/* Apply the line separator except for the last day */}
              {index < forecastData.list.length - 1 && <div className="forecast-day-divider"></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FiveDayForecast;
