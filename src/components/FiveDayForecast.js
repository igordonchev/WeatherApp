import React, { useState } from 'react';
import api from './api'; // Adjust the path accordingly
import '../styles/common.css';

const FiveDayForecast = () => {
  const [location, setLocation] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState('metric'); // Default unit is Celsius

  const handleGetForecastClick = async () => {
    try {
      // Get current weather for the provided location
      const currentWeatherResponse = await api.get('/weather', {
        params: {
          q: location,
          units: selectedUnit,
        },
      });

      setCurrentWeather(currentWeatherResponse.data);

      // Get 5-day forecast for the provided location
      const forecastResponse = await api.get('/forecast', {
        params: {
          q: location,
          units: selectedUnit,
        },
      });

      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
  };

  // Function to toggle between Celsius and Fahrenheit
  const toggleTemperatureUnit = () => {
    setSelectedUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  // Function to convert temperature from Celsius to Fahrenheit
  const convertCelsiusToFahrenheit = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  return (
    <div>
      <h1>5-Day Forecast</h1>
      <form>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <button type="button" onClick={handleGetForecastClick}>
          Get Forecast
        </button>

        {/* Toggle button for temperature unit conversion */}
        <button type="button" onClick={toggleTemperatureUnit}>
          Toggle Temperature Unit ({selectedUnit === 'metric' ? 'Celsius' : 'Fahrenheit'})
        </button>
      </form>

      {error && <p>{error}</p>}
      {currentWeather && (
        <div>
          <h2>Current Weather for {currentWeather.name}</h2>
          <p>
            Temperature: {selectedUnit === 'metric' ? Math.round(currentWeather.main.temp) : convertCelsiusToFahrenheit(currentWeather.main.temp)}&deg;{selectedUnit === 'metric' ? 'C' : 'F'}
          </p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
          {/* Add more current weather information as needed */}
        </div>
      )}
      {forecastData && (
        <div>
          <h2>Forecast for {forecastData.city.name}</h2>
          {/* Display forecast information as needed */}
          {/* You can map through the list to display 3-hourly forecasts */}
          {forecastData.list.map((item, index) => (
            <div key={item.dt}>
              <p>
                {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(item.dt * 1000))}
                {', '}
                {new Date(item.dt * 1000).toLocaleDateString([], {
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: '24px', marginRight: '10px' }}>
                  {selectedUnit === 'metric' ? Math.round(item.main.temp) : convertCelsiusToFahrenheit(item.main.temp)}&deg;{selectedUnit === 'metric' ? 'C' : 'F'}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={`Weather icon for ${item.weather[0].description}`}
                />
                <p style={{ fontSize: '24px', marginLeft: '10px' }}>
                  {new Date(item.dt * 1000).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    hour12: false,
                    hourCycle: 'h23', // Display hours in 24-hour format
                  }).replace(/^0/, '')}H
                </p>
              </div>
              <p>{item.weather[0].description}</p>
              {/* Additional information from the API */}
              <p>Humidity: {item.main.humidity}%</p>
              <p>Wind Speed: {item.wind.speed} m/s</p>
              {/* Add more details as needed */}
              {/* Apply the line separator except for the last day */}
              {index < forecastData.list.length - 1 && <div className="forecast-day-divider"></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FiveDayForecast;
