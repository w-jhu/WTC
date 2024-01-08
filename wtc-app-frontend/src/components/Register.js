import './Register.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Register = () => {
  const registerUser = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic password length validation
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Add your registration logic here (e.g., sending data to a server)
    console.log('Name:', name, ', Email:', email, ', Password:', password);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <small>Password must be at least 8 characters long.</small>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;