// components/LocationSelector.js
import React, { useState } from 'react';

const LocationSelector = ({ onSelectLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectLocation(selectedLocation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Location:
        <input type="text" value={selectedLocation} onChange={handleLocationChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationSelector;
