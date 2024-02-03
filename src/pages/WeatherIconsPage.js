// AnimationPage.js
import React from 'react';
import AnimatedIconComponent from '../components/AnimatedIconComponent';

const AnimationPage = () => {
  const iconUrls = [
    '/icons/clear-day.gif',
    '/icons/clear-night.gif',
    '/icons/cloudy.gif',
    '/icons/error.gif',
    '/icons/fog.gif',
    '/icons/partly-cloudy-day.gif',
    '/icons/partly-cloudy-night.gif',
    '/icons/rain.gif',
    '/icons/raspberry.gif',
    '/icons/snow.gif',
    '/icons/wind.gif',
    // Add more icon URLs as needed
  ];

  return (
    <div>
      <h1>Animation Page</h1>
      {iconUrls.map((url, index) => (
        <AnimatedIconComponent key={index} iconUrl={url} />
      ))}
    </div>
  );
};

export default AnimationPage;
