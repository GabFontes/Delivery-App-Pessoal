const create = require('./CreateSalesService');
const getAll = require('./GetAllSalesByUserIdService');
const update = require('./UpdateSalesService');
const getById = require('./GetSaleByIdService');

module.exports = {
  create,
  getAll,
  update,
  getById,
};
