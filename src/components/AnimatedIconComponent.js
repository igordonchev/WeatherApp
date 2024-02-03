// AnimatedIconComponent.js
import React from 'react';

const AnimatedIconComponent = ({ iconUrl }) => {
  const imagePath = process.env.PUBLIC_URL + iconUrl;
  console.log(`Attempting to load icon: ${imagePath}`);

  return <img src={imagePath} alt="Weather Icon" style={{ width: 200, height: 200 }} />;
};

export default AnimatedIconComponent;
