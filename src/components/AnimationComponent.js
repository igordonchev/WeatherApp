import React from 'react';
import Lottie from 'lottie-react';

const AnimationComponent = ({ animationData }) => {
  return (
    <div>
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
