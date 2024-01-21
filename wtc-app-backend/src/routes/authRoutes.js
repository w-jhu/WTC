const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/profile', authMiddleware, (req, res) => {
    res.send(req.user);
});

router.get('/check-session', authMiddleware, (req, res) => {
    res.status(200).send({ message: 'Session is valid.', user: req.user });
});

module.exports = router;