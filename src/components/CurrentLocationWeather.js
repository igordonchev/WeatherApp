import React, { useState, useEffect } from 'react';
import api from './api';

const CurrentLocationWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentLocation();

        const response = await api.get('/weather', {
          params: {
            lat: position.latitude,
            lon: position.longitude,
          },
        });

        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve location. Please check your browser settings.');
          reject(error);
        }
      );
    });
  };

  const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className="current-location-weather">
      {error ? (
        <p>{error}</p>
      ) : (
        weatherData && (
          <div>
            <h2>Current Weather for {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <img
              src={getWeatherIcon(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
            />
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
          </div>
        )
      )}
    </div>
  );
};

export default CurrentLocationWeather;
