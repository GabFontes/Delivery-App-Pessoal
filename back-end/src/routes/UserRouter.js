const { Router } = require('express');
const UserController = require('../controllers/Users');
const userMiddleware = require('../middlewares/users.middleware');

const userRouter = Router();

userRouter.get('/', UserController.getAll);
userRouter.post('/', userMiddleware, UserController.create);

module.exports = userRouter;

// /register
// /
