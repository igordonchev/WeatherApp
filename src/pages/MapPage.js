// MapPage.js
import React, { useEffect, useState } from 'react';
import api from '../components/api';
import Map from '../components/Map';  // Update the import path
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

      {weatherData && <Map weatherData={weatherData} />}
    </div>
  );
};

export default MapPage;
