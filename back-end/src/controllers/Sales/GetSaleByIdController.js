const SalesService = require('../../services/Sales');

const GetSaleByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await SalesService.getById(id);
    return res.status(200).json(sale);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

module.exports = GetSaleByIdController;
