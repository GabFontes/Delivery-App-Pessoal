const SalesService = require('../../services/Sales');

const CreateSalesController = async (req, res, next) => {
  try {
    const { sale: userSale, products } = req.body;
    const sale = await SalesService.create(userSale, products, req.user.id);
    return res.status(201).json(sale);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

module.exports = CreateSalesController;
