const { Sale, Product, User } = require('../../database/models');
const err = require('../../utils/error.base');

const GetAllSalesByUserIdService = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  if (!sale) {
    throw err('Could not found a sale with this id', 404);
  }

  return sale;
};

module.exports = GetAllSalesByUserIdService;
