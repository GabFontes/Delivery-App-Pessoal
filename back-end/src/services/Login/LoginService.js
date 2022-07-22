const md5 = require('md5');
const { sign } = require('jsonwebtoken');
const { User } = require('../../database/models');
const err = require('../../utils/error.base');
const JWTreader = require('../../utils/jwt.reader');

const LoginService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw err('Could not found a user with this email', 404);
  }

  const hashedPass = md5(password);

  if (hashedPass !== user.password) {
    throw err('Incorrect email/password combination', 401);
  }

  const token = sign({
    role: user.role,
  }, JWTreader(), {
    subject: String(user.id),
    expiresIn: '1d',
  });

  return { user, token };
};

module.exports = LoginService;
