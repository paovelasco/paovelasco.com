import React from 'react';
import {Link} from 'react-router-dom';

const PowerFlagPage = () => {
  return (
    <div className="powerflag-content">
      <h3>READY PLAYER 1...</h3>
      <h2>YOUR GAME BEGINS NOW</h2>
      <p><Link to="/motivation">motivation</Link></p>
    </div>
  );
};

export default PowerFlagPage;
