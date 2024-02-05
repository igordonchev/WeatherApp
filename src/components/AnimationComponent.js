import React from 'react';
import Lottie from 'lottie-react';
import sunnyAnimationData from '../animations/sunny.json';
import snowAnimationData from '../animations/snow.json';
import brokenCloudsAnimationData from '../animations/brokenclouds.json';
import thunderstormAnimationData from '../animations/thunderstorm.json';
import scatteredCloudsAnimationData from '../animations/scatteredclouds.json';
import fewCloudsAnimationData from '../animations/fewclouds.json';

const AnimationComponent = ({ animationType }) => {
  let animationData;

  switch (animationType) {
    case 'sunny':
      animationData = sunnyAnimationData;
      break;
    case 'snow':
      animationData = snowAnimationData;
      break;
    case 'brokenclouds':
      animationData = brokenCloudsAnimationData;
      break;
    case 'thunderstorm':
      animationData = thunderstormAnimationData;
      break;
    case 'scatteredclouds':
      animationData = scatteredCloudsAnimationData;
      break;
    case 'fewclouds':
      animationData = fewCloudsAnimationData;
      break;
    default:
      animationData = sunnyAnimationData;
      break;
  }

  return (
    <div>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default AnimationComponent;
