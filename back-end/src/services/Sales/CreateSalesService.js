const { Sale, SaleProduct } = require('../../database/models');
const GetSaleByIdService = require('./GetSaleByIdService');

const CreateSalesService = async (userSale, products, userId) => {
  const sale = await Sale.create({
    ...userSale,
    userId,
    saleDate: new Date(),
    status: 'Pendente',
  });

  const saleProduct = products.map(async ({ productId, quantity }) =>
    SaleProduct.create({ saleId: sale.dataValues.id, productId, quantity }));
  
  await Promise.all(saleProduct);
  
  const saleWithProducts = await GetSaleByIdService(sale.dataValues.id);

  return saleWithProducts;
};

module.exports = CreateSalesService;
