import React, { useState, useEffect, useCallback } from 'react';
import api from './api';

const WeatherForecast = () => {
  const [location, setLocation] = useState('Geneva'); // Default location
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const fetchForecastData = useCallback(async () => {
    try {
      const response = await api.get('/forecast', {
        params: {
          q: location,
          units: 'metric',
        },
      });

      setForecastData(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setError('Error fetching forecast data. Please try again later.'); // Set a meaningful error message
    }
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchForecastData();
    };

    fetchData();
  }, [fetchForecastData]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <label>
        Enter Location:
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
      </label>
      <button onClick={fetchForecastData}>Get Forecast</button>

      {error ? (
        <p>{error}</p>
      ) : forecastData ? (
        <div>
          <h2>Weather Forecast for {forecastData.city.name}</h2>
          {forecastData.list.map((item) => (
            <div key={item.dt}>
              <p>Date and Time: {item.dt_txt}</p>
              <p>Temperature: {item.main.temp} °C</p>
              <p>Weather: {item.weather[0].description}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
