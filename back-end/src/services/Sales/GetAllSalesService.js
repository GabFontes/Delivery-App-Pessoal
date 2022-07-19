const { Sales } = require('../../database/models');

const GetAllSalesService = async () => {
  const results = await Sales.findAll();
  return results;
};

module.exports = GetAllSalesService;
