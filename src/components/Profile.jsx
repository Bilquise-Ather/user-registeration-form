import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ username }) => {
  const storedUsers = localStorage.getItem('users');
  const users = storedUsers ? JSON.parse(storedUsers) : [];
  const user = users.find((u) => u.username === username);

  return (
    <div className="center-div">
      <h2>Profile</h2>
      <p>Logged in as {username}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>
        <Link to="/home">Logout</Link>
      </p>
    </div>
  );
};

export default Profile;
