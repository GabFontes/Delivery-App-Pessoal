const { User } = require('../../database/models');
const err = require('../../utils/error.base');

const DestroyUserService = async (id) => {
  console.log(id);
  const userExists = await User.findOne({ where: { id } });

  if (!userExists) {
    throw err('User not found', 404);
  }

  const newUser = await User.destroy({ where: { id } });

  return newUser;
};

module.exports = DestroyUserService;
