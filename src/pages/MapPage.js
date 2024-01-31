// MapPage.js
import React, { useEffect, useState } from 'react';
import api from '../components/api';
import Map from '../components/Map';
import '../styles/MapPage.css';

// Import your components here
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

const MapPage = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          const response = await api.get('/weather', {
            params: {
              lat: latitude,
              lon: longitude,
            },
          });

          setWeatherData(response.data);
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Layout>
        <Navigation />
      </Layout>

      {weatherData && (
        <div className="weather-info">
          <Map weatherData={weatherData} />

          <div className="weather-details">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp}&deg;C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            {/* Add more weather information as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
