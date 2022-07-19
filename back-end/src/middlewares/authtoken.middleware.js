const jwt = require('jsonwebtoken');
const JWTreader = require('../utils/jwt.reader');

const authMiddleware = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    console.log(JWTreader());
    const decoded = jwt.verify(token, JWTreader());
    if (decoded) {
      next();
    }
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = authMiddleware;