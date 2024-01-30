// Home.js
import React from 'react';
import Layout from '../components/Layout';
import CurrentLocationWeather from '../components/CurrentLocationWeather'; // Adjust the import path
import CurrentLocationForecast from '../components/CurrentLocationForecast'; // Adjust the import path
import '../styles/common.css';

const Home = () => {
  return (
    <Layout>
      <div className="content-container home-page">
        <div className="main-content">
          <h1>Welcome to the Weather App!</h1>
          {/* Add other content for the home page */}
          <CurrentLocationWeather />
          <CurrentLocationForecast />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
