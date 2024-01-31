import React, { useEffect, useState } from 'react';
import api from '../components/api';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Map from '../components/Map';

const MapPage = () => {
  const [topCities, setTopCities] = useState([]);
  const [selectedCityWeather, setSelectedCityWeather] = useState(null);

  useEffect(() => {
    const fetchTopCities = async () => {
      try {
        const response = await api.get('/group', {
          params: {
            id: '2657896,2657970,2657974,2657882,2658055,2657895,2657936,2657996,2658009,2657984,2660646,2659994,2659810,2659811,2659996,2659812,2657897',
          },
        });
        setTopCities(response.data.list);
        console.log('Top Cities Data:', response.data.list);
      } catch (error) {
        console.error('Error fetching top cities:', error);
      }
    };

    fetchTopCities();
  }, []);

  const handleCityClick = async (coords) => {
    try {
      const response = await api.get('/weather', {
        params: {
          lat: coords.lat,
          lon: coords.lon,
        },
      });

      setSelectedCityWeather(response.data);
    } catch (error) {
      console.error('Error fetching city weather:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <Layout>
        <Navigation />
      </Layout>

      <h1>Swiss Cities Weather</h1>

      <Map topCities={topCities} onCityClick={handleCityClick} />

      {selectedCityWeather && (
        <div>
          <h2>{selectedCityWeather.name} Weather</h2>
          <p>Temperature: {selectedCityWeather.main.temp}°C</p>
          <p>Humidity: {selectedCityWeather.main.humidity}%</p>
          <p>Wind Speed: {selectedCityWeather.wind.speed} m/s</p>
          {/* Add more weather information as needed */}
        </div>
      )}
    </div>
  );
};

export default MapPage;
