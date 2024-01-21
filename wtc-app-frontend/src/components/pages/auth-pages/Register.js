import React from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const handleSubmit = (event) => {
        console.log("Submitted")
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        const user = {
            username,
            email,
            password
        };

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, user)
            .then(response => {
                console.log(response.data);
                console.log("registered");
                // Redirect to login page or show success message
            })
            .catch(error => {
                console.error("Registration error:", error);
                console.log(process.env.REACT_APP_BACKEND_URL);
                // Handle error, show error message to the user
            });
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />

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