const { Router } = require('express');
const UserController = require('../controllers/Users');

const userRouter = Router();

userRouter.post('/', UserController.create);

module.exports = userRouter;
