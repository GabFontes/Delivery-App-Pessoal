const checkRole = require('../../utils/sales.role.condition');
const { Sale } = require('../../database/models');

const GetAllSalesService = async ({ id, role }) => {
  const userSales = await Sale.findAll(checkRole(id, role));
  return userSales;
};

module.exports = GetAllSalesService;
