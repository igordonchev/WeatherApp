import React, { useState, useEffect } from 'react';
import api from './api'; // Adjust the path accordingly
import AnimationComponent from './AnimationComponent'; // Import AnimationComponent
import '../styles/common.css'; // Ensure this line is present for importing common.css

const CurrentLocationForecast = ({ temperatureUnit }) => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentLocation();

        const response = await api.get('/forecast', {
          params: {
            lat: position.latitude,
            lon: position.longitude,
            units: temperatureUnit === 'celsius' ? 'metric' : 'imperial', // Adjust the unit parameter
          },
        });

        setForecastData(response.data);
        setLocation(response.data.city.name);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        setError('Error fetching forecast data. Please try again later.');
      }
    };

    fetchData();
  }, [temperatureUnit]);

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

  const renderAnimation = (description, hour) => {
    // Check if the hour is between 6 and 18 for daytime
    if (hour >= 6 && hour < 18) {
      let animationType = '';
      switch (description.toLowerCase()) {
        case 'snow':
          animationType = 'snow';
          break;
        case 'broken clouds':
          animationType = 'brokenclouds';
          break;
        case 'thunderstorm':
          animationType = 'thunderstorm';
          break;
        case 'scattered clouds':
          animationType = 'scatteredclouds';
          break;
        case 'few clouds':
          animationType = 'fewclouds';
          break;
        default:
          animationType = 'sunny';
          break;
      }

      return <AnimationComponent animationType={animationType} />;
    }

    return null; // Return null if the hour is not between 6 and 18
  };

  return (
    <div className="content-container">
      {error && <p>{error}</p>}
      {forecastData && (
        <div className="main-content">
          <h2>{`5 Days Hourly Forecast for ${location}`}</h2>
          {forecastData.list.map((item, index) => (
            <div key={item.dt}>
              <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{`${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(item.dt * 1000))}, ${new Date(item.dt * 1000).toLocaleDateString([], { month: 'long', day: 'numeric' })}`}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontSize: '24px', marginRight: '10px', textAlign: 'center' }}>
                  {Math.round(
                    temperatureUnit === 'celsius'
                      ? item.main.temp
                      : (item.main.temp * 9) / 5 + 32 // Convert Celsius to Fahrenheit
                  )}
                  °{temperatureUnit === 'celsius' ? 'C' : 'F'}{' '}
                  {new Date(item.dt * 1000).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    hour12: false,
                    hourCycle: 'h23', // Display hours in 24-hour format
                  }).replace(/^0/, '')}H
                </p>
                {/* Render AnimationComponent based on the weather description */}
                {renderAnimation(item.weather[0].description, new Date(item.dt * 1000).getHours())}
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={`Weather icon for ${item.weather[0].description}`}
                />
              </div>
              <p>{item.weather[0].description}</p>
              <p>Humidity: {item.main.humidity}%</p>
              <p>Wind Speed: {item.wind.speed} m/s</p>
              {index < forecastData.list.length - 1 && <br />} {/* Add <br /> between forecast results */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentLocationForecast;
