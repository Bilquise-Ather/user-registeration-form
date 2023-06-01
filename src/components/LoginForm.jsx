import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setLoggedIn, setUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from local storage
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Find user by email and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Set logged-in state and username
      setLoggedIn(true);
      setUsername(user.username);

      // Clear form fields
      setEmail('');
      setPassword('');

      // Navigate to profile page
      navigate('/profile');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="center-div">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
          Login
        </button>
      </form>
      <p>
        Not registered? <Link to="/">Click here</Link> to register.
      </p>
    </div>
  );
};

export default LoginForm;
