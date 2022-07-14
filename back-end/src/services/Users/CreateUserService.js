const md5 = require('md5');
const { User } = require('../../database/models');
const err = require('../../utils/error.base');

const CreateUserService = async ({ name, email, password, role }) => {
  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) {
    throw err('Email address already used', 400);
  }

  const hashedPass = md5(password);

  return User.create({
    name,
    email,
    password: hashedPass,
    role,
  });
};

module.exports = CreateUserService;