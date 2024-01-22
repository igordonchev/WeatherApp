// FiveDayForecast.js
import React, { useEffect, useState } from 'react';
import { getFiveDayForecast } from '../utils/forecastUtils';

const FiveDayForecast = ({ location }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getFiveDayForecast(location);
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching five-day forecast:', error);
      }
    };

    if (location) {
      fetchForecast();
    }
  }, [location]);

  return (
    <div>
      <h1>Five-Day Forecast</h1>
      {/* ... rest of your code to display forecastData */}
    </div>
  );
};

export default FiveDayForecast;
