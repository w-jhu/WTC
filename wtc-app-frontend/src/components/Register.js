import './Register.css';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const Register = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    const user = {
        name,
        email,
        password
    };

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, user)
        .then(response => {
            console.log(response.data);
            // Redirect to login page
        })
        .catch(error => {
            console.error("Registration error:", error);
            // Handle error
        });

  return (
    <div className="container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={Register}>
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