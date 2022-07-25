const ProductsService = require('../../services/Products');

const GetAllProductsController = async (_req, res, next) => {
  try {
    const products = await ProductsService.getAll();
    return res.status(200).json(products);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

module.exports = GetAllProductsController;
