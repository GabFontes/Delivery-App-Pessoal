const create = require('./CreateSalesController');
const getAll = require('./getAllSalesByUserIdController');
const deleted = require('./DeleteSalesController');
const getById = require('./GetSaleByIdController');

module.exports = {
  create,
  getAll,
  deleted,
  getById,
};
