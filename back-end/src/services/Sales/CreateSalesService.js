const { Sales } = require('../../database/models');

const CreateSalesService = async ({
  userId,
  sellerId,
  totalPrice,
  deliveryAddres,
  deliveryNumber }) => {
  const sale = await Sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddres,
    deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });
  return sale;
};

module.exports = CreateSalesService;
