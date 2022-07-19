const create = require('./CreateSalesService');
const getAll = require('./GetAllSalesService');
const deleted = require('./DeleteSalesService');
const getById = require('./GetSaleByIdService');

module.exports = {
  create,
  getAll,
  deleted,
  getById,
};
