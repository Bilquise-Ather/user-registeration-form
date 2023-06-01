import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="center-div">
      <h3>Welcome to home page✌</h3>
      <p>
        <Link to="/login">Go Back</Link>
      </p>
    </div>
  );
};

export default Home;
