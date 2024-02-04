import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import FiveDayForecast from '../components/FiveDayForecast';
import AnimationComponent from '../components/AnimationComponent';
import api from '../components/api'; // Adjust the path accordingly
import '../styles/common.css';

const FiveDayForecastPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [animationType, setAnimationType] = useState(null);

  const handleCurrentWeatherUpdate = (weatherData) => {
    setCurrentWeather(weatherData);
  };

  useEffect(() => {
    // Fetch current weather data on mount
    const fetchCurrentWeather = async () => {
      try {
        const position = await getCurrentLocation();

        const response = await api.get('/weather', {
          params: {
            lat: position.latitude,
            lon: position.longitude,
          },
        });

        setCurrentWeather(response.data);

        // Determine animation type based on weather description
        setAnimationType(getAnimationType(response.data.weather[0].description));
      } catch (error) {
        console.error('Error fetching current weather data:', error);
      }
    };

    fetchCurrentWeather();
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
          reject(error);
        }
      );
    });
  };

  const getAnimationType = (description) => {
    switch (description.toLowerCase()) {
      case 'snow':
        return 'snow';
      case 'broken clouds':
        return 'brokenclouds';
      case 'thunderstorm':
        return 'thunderstorm';
      case 'scattered clouds':
        return 'scatteredclouds';
      case 'few clouds':
        return 'fewclouds';
      default:
        return 'sunny';
    }
  };

  return (
    <Layout>
      <div className="five-day-forecast-page">
        <div className="content-container">
          <div className="main-content">
            <FiveDayForecast onCurrentWeatherUpdate={handleCurrentWeatherUpdate} />

            {currentWeather && (
              <div>
                <h2>Current Weather</h2>
                <p>Location: {currentWeather.name}</p>
                <p>Temperature: {currentWeather.main.temp}°C</p>
                <p>Humidity: {currentWeather.main.humidity}%</p>
                <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
              </div>
            )}

            {/* Display AnimationComponent based on the weather description */}
            {currentWeather && animationType && (
              <AnimationComponent animationType={animationType} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FiveDayForecastPage;
