import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Check if username or email already exists
    const duplicateUser = users.find(
      (user) => user.username === username || user.email === email
    );
    if (duplicateUser) {
      alert('Username or email already exists');
      return;
    }

    // Add new user to the users array
    const newUser = {
      username,
      email,
      password,
    };
    users.push(newUser);

    // Store updated users in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear form fields
    setUsername('');
    setEmail('');
    setPassword('');

    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className="center-div">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p>
        Already registered? <Link to="/login">Click here</Link> to log in.
      </p>
    </div>
  );
};

export default RegistrationForm;
