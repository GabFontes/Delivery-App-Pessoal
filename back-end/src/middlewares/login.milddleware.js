const err = require('../utils/error.base');

const isEmailValid = (email) => {
  if (!email) throw err('"email" is required"', 400);
  const emailRegex = /^[a-z0-9_.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
  const validate = emailRegex.test(email);

  if (!validate) throw err('"email" must be a valid email', 400);
};

const isPasswordValid = (password) => {
  if (!password) throw err('"password" is required', 400);
  if (password.length < 6) throw err('"password" length must be 6 characters long', 400);
};

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  try {
    isEmailValid(email);
    isPasswordValid(password);
    next();
  } catch (e) {
    next(e);
  }
};
