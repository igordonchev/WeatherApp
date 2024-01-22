// WeatherDetails.js
import React, { useEffect, useState } from 'react';
import WeatherCurrent from './WeatherCurrent';

const WeatherDetails = ({ location }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!location) return;

      // Include your API key directly (replace 'YOUR_API_KEY' with your actual key)
      const apiKey = 'd5ffaf58a30ebe18ca5f64b1e284543a';

      try {
        // Current Weather API Call
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
        const currentWeatherResponse = await fetch(currentWeatherUrl);
        const currentWeatherData = await currentWeatherResponse.json();
        setCurrentWeather(currentWeatherData);

        // Set the location name
        setLocationName(currentWeatherData.name);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [location]);

  return (
    <div>
      {currentWeather && <WeatherCurrent currentWeather={currentWeather} locationName={locationName} />}
      {/* Add other components for hourly and daily forecast as needed */}
    </div>
  );
};

export default WeatherDetails;
