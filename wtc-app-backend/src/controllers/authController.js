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

        res.status(201).send({ user, token });
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

        res.status(200).send({ message: 'Login successful!', user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = { register, login };