import React from 'react';

const TemperatureUnitToggle = ({ unit, onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>
        Toggle Temperature Unit ({unit === 'celsius' ? 'Fahrenheit' : 'Celsius'})
      </button>
    </div>
  );
};

export default TemperatureUnitToggle;
