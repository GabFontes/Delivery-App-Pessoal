const { Router } = require('express');
const UserController = require('../controllers/Users');
const UserMiddleware = require('../middlewares/users.middleware');

const userRouter = Router();

userRouter.post('/', UserMiddleware, UserController.create);

module.exports = userRouter;
