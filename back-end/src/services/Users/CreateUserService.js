const { User } = require('../../database/models');
const md5 = require('md5');
const AppError = require("../../utils/AppError");

module.exports = CreateUserService = async ({ name, email, password, role }) => {
  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) {
    throw new AppError('Email address already used');
  };

  const hashedPass = md5(password);

  return User.create({
    name,
    email,
    password: hashedPass,
    role
  });
};
