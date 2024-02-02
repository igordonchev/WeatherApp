import React from 'react';
import AnimationComponent from '../components/AnimationComponent';

const AnimationPage = () => {
  return (
    <div>
      <h1>This is the Animation Page</h1>
      <AnimationComponent animationType="sunny" />
      <AnimationComponent animationType="snow" />
      <AnimationComponent animationType="brokenclouds" />
      <AnimationComponent animationType="thunderstorm" />
      <AnimationComponent animationType="scatteredclouds" />
      <AnimationComponent animationType="fewclouds" />
    </div>
  );
};

export default AnimationPage;
