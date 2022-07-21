const { Router } = require('express');
const SalesController = require('../controllers/Sales');
const AuthMiddleware = require('../middlewares/authtoken.middleware');

const saleRouter = Router();

saleRouter.get('/', AuthMiddleware, SalesController.getAll);
saleRouter.get('/:id', AuthMiddleware, SalesController.getById);
saleRouter.post('/', AuthMiddleware, SalesController.create);
saleRouter.delete('/', SalesController.deleted);

module.exports = saleRouter;
