// LocationForm.js
import React, { useState } from 'react';

const LocationForm = ({ onLocationSubmit }) => {
  const [location, setLocation] = useState('');

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    onLocationSubmit(location);
  };

  return (
    <form onSubmit={handleLocationSubmit}>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationForm;
