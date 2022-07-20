const { Sale } = require('../../database/models');
const err = require('../../utils/error.base');

const DeleteSalesService = async (id) => {
  const sale = await Sale.delete(id);

  if (!sale) {
    throw err('Could not found a sale with this id', 404);
  }

  return sale;
};

module.exports = DeleteSalesService;
