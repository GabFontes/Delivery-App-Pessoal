const create = require('./CreateSalesController');
const getAll = require('./getAllSalesByUserIdController');
const update = require('./UpdateSalesController');
const getById = require('./GetSaleByIdController');

module.exports = {
  create,
  getAll,
  update,
  getById,
};
