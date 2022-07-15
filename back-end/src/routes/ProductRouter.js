const { Router } = require('express');
const ProductController = require('../controllers/Products');

const productRouter = Router();

productRouter.get('/', ProductController.getAll);

module.exports = productRouter;
