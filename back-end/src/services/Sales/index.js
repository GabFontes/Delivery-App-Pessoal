const create = require('./CreateSalesService');
const getAll = require('./GetAllSalesByUserIdService');
const deleted = require('./DeleteSalesService');
const getById = require('./GetSaleByIdService');

module.exports = {
  create,
  getAll,
  deleted,
  getById,
};
