require('dotenv').config();
require('./src/config/db');
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3001;
const authRoutes = require('./src/routes/authRoutes');
app.use(express.json());
app.use(cors());
app.use('/api', authRoutes);
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;