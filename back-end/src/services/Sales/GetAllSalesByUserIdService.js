const { Sale } = require('../../database/models');

const GetAllSalesService = async (id) => {
  const userSales = await Sale.findAll({
    where: { userId: id },
  });
  return userSales;
};

module.exports = GetAllSalesService;
