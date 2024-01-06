import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const attemptLogin = () => {
    // Perform validation
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect to the user's dashboard or another page
      // window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password');
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
