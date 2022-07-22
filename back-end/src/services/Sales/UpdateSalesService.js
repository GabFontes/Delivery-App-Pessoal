const { Sale } = require('../../database/models');
const err = require('../../utils/error.base');

const updateSalesService = async (id, status) => {
  await Sale.update({ status }, { where: { id } });

  const sale = await Sale.findByPk(id);

  if (!sale) {
    throw err('Could not found a sale with this id', 404);
  }

  return sale;
};

module.exports = updateSalesService;
