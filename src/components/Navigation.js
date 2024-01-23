import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';

const Navigation = () => {
  return (
    <div className="nav-container">
      {/* Your navigation links */}
      <Link to="/forecast">Forecast</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <Link to="/page4">Page 4</Link>
      <Link to="/page5">Page 5</Link>
      <Link to="/page6">Page 6</Link>
      <Link to="/page7">Page 7</Link>
      <Link to="/page8">Page 8</Link>
      <Link to="/page9">Page 9</Link>
      <Link to="/page10">Page 10</Link>
    </div>
  );
};

export default Navigation;
