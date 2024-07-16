const { sign, verify } = require('jsonwebtoken');
const JWT = process.env.JWT_SECRET;

const generateToken = (payload) => {
    return sign(payload, JWT);
}

const verifyToken = (token) => {
    return verify(token, JWT);
}

module.exports = { generateToken, verifyToken };