const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        // Read token from cookie
        const token = req.cookies.token;
        if (!token) {
            throw new Error();
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = authMiddleware;