const { Op } = require('sequelize');
const { User } = require('../../database/models');

const GetAllUserService = async () => {
  const results = await User.findAll({ where: { id: { [Op.ne]: 'administrator' } } });
  return results;
};

module.exports = GetAllUserService;
