// Home.js
import React from 'react';
import Header from '../components/Header';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
      <Header showHeader={true} />
      <CurrentLocationWeather />
      <Navigation />
    </div>
  );
};

export default Home;
