const { Router } = require('express');
const SellerController = require('../controllers/Admin');
const AuthMiddleware = require('../middlewares/authtoken.middleware');

const sellersRouter = Router();

sellersRouter.get('/', AuthMiddleware, SellerController.getAll);

module.exports = sellersRouter;
