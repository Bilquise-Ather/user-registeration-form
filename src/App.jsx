import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Home from './components/Home';
import './app.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <Router>
      <div className="container">
        <div className="center-div">
          <Routes>
            <Route
              path="/"
              element={
                loggedIn ? <Navigate to="/profile" /> : <RegistrationForm />
              }
            />
            <Route
              path="/login"
              element={
                <LoginForm
                  setLoggedIn={setLoggedIn}
                  setUsername={setUsername}
                />
              }
            />
            <Route
              path="/profile"
              element={
                loggedIn ? <Profile username={username} /> : <Navigate to="/" />
              }
            />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
