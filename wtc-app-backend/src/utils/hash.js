const bcrypt = require('bcryptjs');

const saltRounds = 10;

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
};

const comparePassword = async (candidatePassword, passwordHash) => {
    return bcrypt.compare(candidatePassword, passwordHash);
};

module.exports = { hashPassword, comparePassword };