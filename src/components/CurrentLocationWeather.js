// CurrentLocationWeather.js
import React, { useState, useEffect } from 'react';
import api from './api'; // Adjust the path accordingly
import '../styles/common.css';

const CurrentLocationWeather = ({ selectedLocation, temperatureUnit }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentLocation(selectedLocation);

        const response = await api.get('/weather', {
          params: {
            lat: position.latitude,
            lon: position.longitude,
            units: temperatureUnit === 'celsius' ? 'metric' : 'imperial', // Adjust the unit parameter
          },
        });

        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again later.');
      }
    };

    fetchData();
  }, [selectedLocation, temperatureUnit]);

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

  // Function to get the weather icon
  const getWeatherIcon = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  };

  // Function to get the current time with a big "H" and no minutes
  const getCurrentTime = () => {
    const currentHour = new Date().getHours();
    const formattedHour = currentHour < 10 ? `0${currentHour}` : `${currentHour}`;
    return `${formattedHour} H`;
  };

  return (
    <div className="current-location-weather" style={{ textAlign: 'center' }}>
      {error ? (
        <p>{error}</p>
      ) : (
        weatherData && (
          <div>
            <h2 style={{ fontSize: '1.5em' }}>Weather for {weatherData.name}</h2>
            {/* Display actual temperature, weather icon, and current time */}
            <p style={{ fontSize: '3em', fontWeight: 'bold' }}>
              {Math.round(weatherData.main.temp)} °{temperatureUnit === 'celsius' ? 'C' : 'F'}{' '}
              <img
                src={getWeatherIcon(weatherData.weather[0].icon)}
                alt={weatherData.weather[0].description}
                style={{ verticalAlign: 'middle', width: '3em', height: '3em' }}
              />
              {getCurrentTime()}
            </p>
            <p style={{ fontSize: '1.2em' }}>
              {new Date().toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p>Weather: {weatherData.weather[0].description}</p>
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
