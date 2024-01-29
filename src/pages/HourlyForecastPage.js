import React, { useState } from 'react';
import HourlyForecast from '../components/HourlyForecast';
import api from '../components/api'; // adjust the path accordingly

const HourlyForecastPage = () => {
  const [hourlyData, setHourlyData] = useState(null);

  const fetchHourlyForecast = async (location) => {
    try {
      const response = await api.get('/forecast/hourly', {
        params: {
          q: location,
        },
      });

      console.log('Hourly Forecast Response:', response.data);
      setHourlyData(response.data);
    } catch (error) {
      console.error('Error fetching hourly forecast data:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h1>Hourly Forecast Page</h1>
      <HourlyForecast onFetchHourlyForecast={fetchHourlyForecast} />
    </div>
  );
};

export default HourlyForecastPage;
