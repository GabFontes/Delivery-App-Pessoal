const { User } = require('../../database/models');

const CreateUserService = async ({ name, email, password, role }) => {
  const register = await User.create(name, email, password, role);
  return register;
}

module.exports = CreateUserService;
