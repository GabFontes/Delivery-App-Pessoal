const { Router } = require('express');
const AdminController = require('../controllers/Admin');
const AdmMiddleware = require('../middlewares/adm.middleware');
const AuthAdmMiddleware = require('../middlewares/authAdm.middleware');
const AuthMiddleware = require('../middlewares/authtoken.middleware');

const registerRouter = Router();

registerRouter.post('/', AdmMiddleware, AuthMiddleware, AuthAdmMiddleware, AdminController.create);
registerRouter.get('/', AuthMiddleware, AuthAdmMiddleware, AdminController.getAll);
registerRouter.delete('/:id', AuthMiddleware, AuthAdmMiddleware, AdminController.destroy);

module.exports = registerRouter;
