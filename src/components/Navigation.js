// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';

const Navigation = () => {
  return (
    <div className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/forecast">Forecast</Link>
      <Link to="/location1">Location 1</Link>
      <Link to="/location2">Location 2</Link>
      <Link to="/location3">Location 3</Link>
      <Link to="/location4">Location 4</Link>
      <Link to="/location5">Location 5</Link>
      <Link to="/location6">Location 6</Link>
      <Link to="/location7">Location 7</Link>
      <Link to="/location8">Location 8</Link>
      <Link to="/location9">Location 9</Link>
      <Link to="/location10">Location 10</Link>
    </div>
  );
};

export default Navigation;
