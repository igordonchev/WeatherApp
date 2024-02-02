import React from 'react';
import Lottie from 'lottie-react';
import sunnyAnimationData from '../animations/sunny.json';
import snowAnimationData from '../animations/snow.json';
import brokenCloudsAnimationData from '../animations/brokenclouds.json';
import thunderstormAnimationData from '../animations/thunderstorm.json'; // Corrected filename
import scatteredCloudsAnimationData from '../animations/scatteredclouds.json';
import fewCloudsAnimationData from '../animations/fewclouds.json';

const AnimationComponent = ({ animationType }) => {
  let animationData;
  let heading;

  // Set the animationData and heading based on the provided animationType
  switch (animationType) {
    case 'sunny':
      animationData = sunnyAnimationData;
      heading = 'Sunny Animation';
      break;
    case 'snow':
      animationData = snowAnimationData;
      heading = 'Snow Animation';
      break;
    case 'brokenclouds':
      animationData = brokenCloudsAnimationData;
      heading = 'Broken Clouds Animation';
      break;
    case 'thunderstorm': // Corrected case for thunderstorm.json
      animationData = thunderstormAnimationData;
      heading = 'Thunderstorm Animation';
      break;
    case 'scatteredclouds':
      animationData = scatteredCloudsAnimationData;
      heading = 'Scattered Clouds Animation';
      break;
    case 'fewclouds':
      animationData = fewCloudsAnimationData;
      heading = 'Few Clouds Animation';
      break;
    default:
      // Use the sunny animation as a default
      animationData = sunnyAnimationData;
      heading = 'Sunny Animation';
      break;
  }

  return (
    <div>
      <h2>{heading}</h2>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 200, height: 200 }} // Adjust size as needed
      />
    </div>
  );
};

export default AnimationComponent;
