import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import api from '../components/api'; // Adjust the path accordingly
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

      // Group forecast data by day
      const groupedData = groupByDay(response.data.list);

      setForecastData(groupedData);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setError('Error fetching forecast data. Please try again later.');
    }
  };

  // Function to group forecast data by day
  const groupByDay = (data) => {
    return data.reduce((result, item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();

      if (!result[date]) {
        result[date] = [];
      }

      result[date].push(item);

      return result;
    }, {});
  };

  return (
    <div className="five-day-forecast-page">
      <Header />
      <Navigation />
      <div className="main-content">
        <h1>5-Day Forecast</h1>
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
            {Object.entries(forecastData).map(([day, dayData]) => (
              <div key={day}>
                <h2>{`Forecast for ${day}`}</h2>
                {/* Display forecast information for the day */}
                {dayData.map((item) => (
                  <div key={item.dt}>
                    <p>{new Date(item.dt * 1000).toLocaleString()}</p>
                    <p>Temperature: {item.main.temp} °C</p>
                    {/* Add more details as needed */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FiveDayForecastPage;
