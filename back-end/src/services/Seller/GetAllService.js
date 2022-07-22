const { User } = require('../../database/models');

const GetAllSellesService = async () => {
  const results = await User.findAll({ where: { role: 'seller' } });
  return results;
};

module.exports = GetAllSellesService;
