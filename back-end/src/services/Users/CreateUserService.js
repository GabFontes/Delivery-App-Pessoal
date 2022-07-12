const User = require('../../database/models/users');

const CreateUserService = async ({ name, email, password }) => {
  const register = await User.create(name, email, password);
  return register;
}

module.exports = CreateUserService;