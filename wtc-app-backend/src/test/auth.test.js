const request = require('supertest');
const app = require('../index');
const User = require('../models/user');
const authRoutes = require('../routes/authRoutes');
app.use('/api/auth', authRoutes);
const mongoose = require('mongoose');
require('dotenv').config();

const testDatabaseUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}` +
            `@${process.env.DB_CLUSTER}/testDB?retryWrites=true&w=majority`;

describe('Authentication API', () => {
    beforeAll(async () => {
        await mongoose.connect(testDatabaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const collections = Object.keys(mongoose.connection.collections);
        for (const collectionName of collections) {
            const collection = mongoose.connection.collections[collectionName];
            await collection.deleteMany({});
        }
    });

    test('Should sign up a new user', async () => {
        const response = await request(app).post('/api/auth/register').send({
            username: 'newuser',
            email: 'test@example.com',
            password: 'MyPass777!'
        });
        console.log(response.body);
        expect(response.status).toBe(201);
    });

    test('Should login existing user', async () => {
        const response = await request(app).post('/api/auth/login').send({
            email: 'test@example.com',
            password: 'MyPass777!'
        });
        console.log(response.body);
        expect(response.status).toBe(200);
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
});