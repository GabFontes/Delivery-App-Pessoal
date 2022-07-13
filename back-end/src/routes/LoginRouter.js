const { Router } = require('express');
const LoginController = require('../controllers/Login/LoginController');
const loginMiddleware = require('../middlewares/login.milddleware');
const loginRouter = Router();

loginRouter.post('/', loginMiddleware, LoginController);

module.exports = loginRouter;
