const { Sales } = require('../../database/models');
const err = require('../../utils/error.base');

const GetSaleByIdService = async (id) => {
  const sale = await Sales.findById(id);

  if (!sale) {
    throw err('Could not found a sale with this id', 404);
  }

  return sale;
};

module.exports = GetSaleByIdService;
