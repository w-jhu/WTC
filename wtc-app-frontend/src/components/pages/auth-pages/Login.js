import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const attemptLogin = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
            username,
            password
        });

        alert('Login successful!');
        setIsLoggedIn(true);
        // Redirect after sign in (maybe to home page or page user was trying to access?)
        navigate('/');
    } catch (error) {
        alert('Invalid username or password');
        console.error("Login error:", error);
    }
  };

  function changePage() {
    window.location.href = "/register";
  }

  return (
    <div className="Login">
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="button" onClick={attemptLogin}>
          Login
        </button>
        <button type="button" onClick={changePage}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
