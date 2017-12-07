import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Pablo Velasco</h1>
      <h2>Software Engineer</h2>
      <ul>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ul>
    </div>
  );
};

export default HomePage;
