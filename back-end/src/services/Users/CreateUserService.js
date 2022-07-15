const md5 = require('md5');
const { sign } = require('jsonwebtoken');
const { User } = require('../../database/models');
const err = require('../../utils/error.base');
const JWTreader = require('../../utils/jwt.reader');

const CreateUserService = async ({ name, email, password }) => {
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) {
    throw err('Email address already used', 409);
  }

  const hashedPass = md5(password);

  const newUser = await User.create({
    name,
    email,
    password: hashedPass,
    role: 'customer',
  });

  const token = sign({}, JWTreader(), {
    subject: String(newUser.id),
    expiresIn: '1d',
  });
  return { ...newUser.dataValues, token };
};

module.exports = CreateUserService;
