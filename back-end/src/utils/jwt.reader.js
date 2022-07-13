const fs = require('fs');
const path = require('path');

const JWTreader = () => {
  const jwtSecret = fs.readFileSync(path.resolve(__dirname, '../../jwt.evaluation.key'), 'utf8');
  return jwtSecret;
};

module.exports = JWTreader;