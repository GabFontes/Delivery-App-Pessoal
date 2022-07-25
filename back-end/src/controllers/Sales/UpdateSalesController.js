const SalesService = require('../../services/Sales');

const UpdateSalesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const sale = await SalesService.update(id, status);
    return res.status(200).json(sale);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

module.exports = UpdateSalesController;
