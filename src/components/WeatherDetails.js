import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDetails = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: location, // Include the location parameter
            appid: 'd5ffaf58a30ebe18ca5f64b1e284543a',
            units: 'metric',
          },
        });

        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather details:', error);
        setError('Error fetching weather details. Please try again later.');
      }
    };

    if (location) {
      fetchWeatherDetails();
    }
  }, [location]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          {/* Display relevant weather details from weatherData */}
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading weather details...</p>
      )}
    </div>
  );
};

export default WeatherDetails;
