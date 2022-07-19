const create = require('./CreateSalesController');
const getAll = require('./GetAllSalesController');
const deleted = require('./DeleteSalesController');
const getById = require('./GetSaleByIdController');

module.exports = {
  create,
  getAll,
  deleted,
  getById,
};