const { Sale, Product, User } = require('../../database/models');

const GetAllSalesService = async () => {
  const results = await Sale.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  return results;
};

module.exports = GetAllSalesService;
