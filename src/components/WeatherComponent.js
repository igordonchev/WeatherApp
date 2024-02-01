import React from 'react';
import Lottie from 'lottie-react'; // Import Lottie
import sunnyAnimation from '../animations/sunny.json'; // Adjust the path
import rainyAnimation from '../animations/rainy.json';
 // Import the rainy animation JSON file
// Add more imports for other weather conditions

const WeatherComponent = ({ isDay, weatherCondition }) => {
  // Map weather conditions to corresponding Lottie animations
  const getAnimationForCondition = (condition) => {
    switch (condition) {
      case 'sunny':
        return sunnyAnimation;
      case 'rainy':
        return rainyAnimation;
      // Add more cases for other weather conditions
      default:
        return null;
    }
  };

  const animationData = getAnimationForCondition(weatherCondition);

  return (
    <div>
      {/* Other weather information */}
      {animationData && (
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 100, height: 100 }} // Adjust size as needed
        />
      )}
    </div>
  );
};

export default WeatherComponent;
