// MapPage.js
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import api from '../components/api';
import '../styles/MapPage.css';

// Import your components here
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

const MapPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user's current location
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch weather data based on current location
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

  useEffect(() => {
    if (weatherData && !map) {
      const newMap = L.map('map').setView([weatherData.coord.lat, weatherData.coord.lon], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(newMap);

      L.marker([weatherData.coord.lat, weatherData.coord.lon])
        .addTo(newMap)
        .bindPopup(weatherData.name)
        .openPopup();

      setMap(newMap);
    }
  }, [weatherData, map]);

  return (
    <div>
      {/* Add your layout component */}
      <Layout>
        {/* Add your navigation component */}
        <Navigation />
      </Layout>

      {/* Render the centered map container with increased size */}
      <div className="map-container" id="map" style={{ width: '300px', height: '300px', margin: 'auto' }}></div>
    </div>
  );
};

export default MapPage;
