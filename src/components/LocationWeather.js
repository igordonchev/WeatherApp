// Home.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import LocationForm from '../components/LocationForm';
import LocationWeather from '../components/LocationWeather';

const Home = () => {
  const [submittedLocation, setSubmittedLocation] = useState('');

  const handleFormSubmit = (location) => {
    setSubmittedLocation(location);
  };

  return (
    <Layout>
      <div>
        <LocationForm onFormSubmit={handleFormSubmit} />
        {submittedLocation && (
          <div>
            <h2>User's Submitted Location: {submittedLocation}</h2>
            <LocationWeather location={submittedLocation} /> {/* Pass the location prop */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
