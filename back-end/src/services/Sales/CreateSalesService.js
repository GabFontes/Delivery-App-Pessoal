const { Sale } = require('../../database/models');
const { SaleProduct } = require('../../database/models');

const CreateSalesService = async (userSale, products, userId) => {
  console.log(userSale);
  const sale = await Sale.create({
    ...userSale,
    userId,
    saleDate: new Date(),
    status: 'Pendente',
  });

  const saleProduct = products.map(async ({ productId, quantity }) =>
    SaleProduct.create({ saleId: sale.dataValues.id, productId, quantity }));

  return { sale, products: await Promise.all(saleProduct) };
};

module.exports = CreateSalesService;
