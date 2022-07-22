const { User } = require('../../database/models');

const GetAllUserService = async () => {
  const results = await User.findAll();
  return results;
};

module.exports = GetAllUserService;
