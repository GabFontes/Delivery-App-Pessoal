const { User } = require('../../database/models');

module.exports = GetAllUserService = async () => {
  const results = await User.findAll();
  return results;
}
