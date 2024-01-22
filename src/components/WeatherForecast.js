// WeatherForecast.js
import React, { useState } from 'react';
import WeatherDetails from './WeatherDetails';

const WeatherForecast = () => {
  const [location, setLocation] = useState('');
  const [submittedLocation, setSubmittedLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedLocation(location);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter location"
          />
        </label>
        <button type="submit">Get Forecast</button>
      </form>

      <WeatherDetails location={submittedLocation} />
    </div>
  );
};

export default WeatherForecast;
