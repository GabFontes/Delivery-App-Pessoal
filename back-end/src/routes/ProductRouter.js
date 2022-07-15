const { Router } = require('express');
const ProductController = require('../controllers/Products');
const AuthMiddleware = require('../middlewares/authtoken.middleware');

const productRouter = Router();

productRouter.get('/', AuthMiddleware, ProductController.getAll);

module.exports = productRouter;
