const { User } = require('../../database/models');
const AppError = require("../../utils/AppError");
const md5 = require('md5');
const { sign } = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = LoginService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new AppError('Incorrect email/password combination', 401);
  };

  const hashedPass = md5(password);

  if (hashedPass !== user.password) {
    throw new AppError('Incorrect email/password combination', 401);
  };

  const token = sign({}, JWT_SECRET, {
    subject: String(user.id),
    expiresIn: '1d'
  });

  return { user, token };
};
