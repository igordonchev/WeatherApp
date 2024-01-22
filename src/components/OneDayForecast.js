// OneDayForecast.js
import React, { useEffect, useState } from 'react';
import { getOneDayForecast } from '../utils/forecastUtils';

const OneDayForecast = ({ location }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getOneDayForecast(location);
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching one-day forecast:', error);
      }
    };

    if (location) {
      fetchForecast();
    }
  }, [location]);

  return (
    <div>
      <h1>One-Day Forecast</h1>
      {/* ... rest of your code to display forecastData */}
    </div>
  );
};

export default OneDayForecast;