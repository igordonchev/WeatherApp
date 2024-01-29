// WeatherDetails.js
import React, { useState, useEffect } from 'react';
import api from './api'; // Adjust the path accordingly

const WeatherDetails = ({ location }) => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await api.get('/forecast', {
          params: {
            q: location,
          },
        });

        setForecastData(response.data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        setError('Error fetching forecast data. Please try again later.');
      }
    };

    if (location) {
      fetchForecastData();
    }
  }, [location]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : forecastData ? (
        <div>
          <h2>Forecast for {location}</h2>
          {/* Display forecast information as needed */}
          {forecastData.list.map((item) => (
            <div key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleString()}</p>
              <p>Temperature: {item.main.temp} °C</p>
              <p>Humidity: {item.main.humidity}%</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>No forecast data available.</p>
      )}
    </div>
  );
};

export default WeatherDetails;
