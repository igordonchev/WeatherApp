// WeatherForecast.js
import React, { useState } from 'react';
import api from './api'; // Adjust the path accordingly

const WeatherForecast = () => {
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
      <h1>Weather Forecast</h1>
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
          {/* You can map through the list to display forecasts */}
          {forecastData.list.map((item) => (
            <div key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p>
                Time: {new Date(item.dt * 1000).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
                }).replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}
              </p>
              <p>Temperature: {item.main.temp} °C</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
