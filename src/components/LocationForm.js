// LocationForm.js
import React, { useState } from 'react';

const LocationForm = ({ onFormSubmit }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const clearSubmittedLocation = (e) => {
    e.preventDefault();

    // Check if the location is not empty before submitting
    if (location.trim() !== '') {
      onFormSubmit(location);
      setLocation('');
    }
  };

  return (
    <form onSubmit={clearSubmittedLocation}>
      <label>
        Enter Location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationForm;
