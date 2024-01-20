const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateAuthToken = (user) => {
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
        expiresIn: '2h'
    });
    return token;
};

// Register function
const register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        const token = generateAuthToken(user);
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 2 * 60 * 60 * 1000 // two hours expiration
        });

        res.status(201).send({ user });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).send({ message: 'Login failed!' });
        }

        // Updated to use await with the promise returned from comparePassword
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).send({ message: 'Login failed!' });
        }

        const token = generateAuthToken(user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 2 * 60 * 60 * 1000 // expires in 2 hours
        });

        res.status(200).send({ message: 'Login successful!', user });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Logout function
const logout = (req, res) => {
    // clear cookie
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).send({ message: 'Logout successful!' });
};

module.exports = { register, login, logout };