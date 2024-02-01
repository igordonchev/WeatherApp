import React from 'react';
import AnimationComponent from '../components/AnimationComponent';
import sunnyAnimationData from '../animations/sunny.json';
// Updated import path after renaming the file to snow.json
import snowAnimationData from '../animations/snow.json';

const AnimationPage = () => {
  return (
    <div>
      <h1>This is the Animation Page</h1>
      {/* Pass sunnyAnimationData to the first AnimationComponent */}
      <AnimationComponent animationData={sunnyAnimationData} />
      {/* Pass snowAnimationData to the second AnimationComponent */}
      <AnimationComponent animationData={snowAnimationData} />
    </div>
  );
};

export default AnimationPage;
