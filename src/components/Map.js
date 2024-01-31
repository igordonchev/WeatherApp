// Map.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ weatherData }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current && weatherData) {
      const newMap = L.map('map').setView([weatherData.coord.lat, weatherData.coord.lon], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(newMap);

      L.marker([weatherData.coord.lat, weatherData.coord.lon])
        .addTo(newMap)
        .bindPopup(weatherData.name)
        .openPopup();

      mapRef.current = newMap;  // Save the map instance to the ref
    }
  }, [weatherData]);

  return <div id="map" style={{ width: '300px', height: '300px', margin: 'auto' }}></div>;
};

export default Map;
