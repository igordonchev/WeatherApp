import React, { useState, useEffect, useCallback } from 'react';
import api from '../components/api'; // Make sure to adjust the path accordingly

const WeatherForecast = () => {
  const [location, setLocation] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const fetchForecastData = useCallback(async (location) => {
    try {
      console.log('Location:', location);

      const response = await api.get('/forecast', {
        params: {
          q: location,
          units: 'metric',
        },
      });

      console.log('API Request:', response.config.url);
      console.log('API Response:', response.data);

      setForecastData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setError('Error fetching forecast data. Please try again later.');
    }
  }, []);

  useEffect(() => {
    const fetchCurrentLocationForecast = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            const response = await api.get('/forecast', {
              params: {
                lat: latitude,
                lon: longitude,
                units: 'metric',
              },
            });

            console.log('API Request:', response.config.url);
            console.log('API Response:', response.data);

            setForecastData(response.data);
            setError(null);
          },
          (error) => {
            console.error('Error getting location:', error);
            setError('Unable to retrieve location. Please check your browser settings.');
          }
        );
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        setError('Error fetching forecast data. Please try again later.');
      }
    };

    fetchCurrentLocationForecast();
  }, []); // Empty dependency array means this effect runs once on initial mount

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGetForecastClick = () => {
    fetchForecastData(location);
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
      <button onClick={handleGetForecastClick}>Get Forecast</button>

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
