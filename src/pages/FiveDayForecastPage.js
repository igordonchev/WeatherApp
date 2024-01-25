// FiveDayForecastPage.js
import React, { useState } from 'react';
import api from '../components/api'; // Adjust the path accordingly
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import '../styles/common.css';

const FiveDayForecastPage = () => {
  const [location, setLocation] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetForecastClick = async () => {
    try {
      const response = await api.get('/forecast', {
        params: {
          q: location,
        },
      });

      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setError('Error fetching forecast data. Please try again later.');
    }
  };

  const roundTemperature = (temperature) => Math.round(temperature);

  return (
    <Layout>
      <div className="content-container">
        <main className="main-content">
          <form>
            <label>
              Location:
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <button type="button" onClick={handleGetForecastClick}>
              Get Forecast
            </button>
          </form>
          {error && <p>{error}</p>}
          {forecastData && (
            <div>
              {Object.entries(
                forecastData.list.reduce((acc, item) => {
                  const date = new Date(item.dt * 1000).toLocaleDateString();
                  if (!acc[date]) {
                    acc[date] = [];
                  }
                  acc[date].push(item);
                  return acc;
                }, {})
              ).map(([date, items]) => (
                <div key={date}>
                  <h2>{date}</h2>
                  {items.map((item) => (
                    <div key={item.dt} className="forecast-item">
                      <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
                      <p>Temperature: {roundTemperature(item.main.temp)} °C</p>
                      {item.weather && item.weather.length > 0 && (
                        <img
                          src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                          alt={item.weather[0].description}
                        />
                      )}
                      {/* Add more details as needed */}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </Layout>
  );
};

export default FiveDayForecastPage;
