const SalesService = require('../../services/Sales');

const CreateSalesController = async (req, res, next) => {
  try {
    const sale = await SalesService.create(req.body);
    return res.status(200).json(sale);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = CreateSalesController;