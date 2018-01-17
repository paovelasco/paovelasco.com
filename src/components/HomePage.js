import React from 'react';
import linkedInImage from '../../assests/images/linkedIn.png';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage-content">
      <div className="header">
        <h1>Pablo Velasco</h1>
        <h2>Software Engineer</h2>
        <Link to='https://www.linkedin.com/in/pablo-velasco-455731a/' target='_blank'><img src={linkedInImage} /></Link>
      </div>
    </div>
  );
};

export default HomePage;
