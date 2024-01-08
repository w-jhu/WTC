const mongoose = require('mongoose');
const { hashPassword, comparePassword } = require('../utils/hash');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String, 
        required: true
    }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    try {
        this.password = await hashPassword(this.password);
        next();
    } catch (err) {
        next(err);
    }
});

userSchema.methods.comparePassword = function(candidatePassword) {
    return comparePassword(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
