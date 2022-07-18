const { Product } = require('../../database/models');

const GetAllProductsService = async () => {
  const results = await Product.findAll();
  return results;
};

module.exports = GetAllProductsService;