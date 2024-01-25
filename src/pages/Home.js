// Home.js
import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import CurrentLocationWeather from '../components/CurrentLocationWeather';

const Home = () => {
  return (
    <Layout>
      <main>
        {/* Include the CurrentLocationWeather component */}
        <CurrentLocationWeather />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
