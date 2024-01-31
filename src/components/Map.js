import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ topCities, onCityClick }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log('Map component is rendered.');

    setTimeout(() => {
      if (!mapRef.current && topCities && topCities.length > 0) {
        console.log('Initializing map...');
        const switzerlandCenter = [46.8182, 8.2275];
        const newMap = L.map('map').setView(switzerlandCenter, 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(newMap);

        topCities.forEach((city) => {
          if (city && city.coord && city.coord.lat && city.coord.lon) {
            const marker = L.marker([city.coord.lat, city.coord.lon])
              .addTo(newMap)
              .bindPopup(city.name)
              .on('click', () => onCityClick(city.coord));
          }
        });

        mapRef.current = newMap;
      }
    }, 100); // Adjust the delay if needed
  }, [topCities, onCityClick]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Swiss Cities Map</h2>
      <div id="map" style={{ display: 'inline-block', width: '300px', height: '300px' }}></div>
    </div>
  );
};

export default Map;
