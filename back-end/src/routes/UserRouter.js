const { Router } = require('express');
const UserController = require('../controllers/Users');
const userMiddleware = require('../middlewares/users.middleware');
const loginMiddleware = require('../middlewares/login.milddleware');
const router = Router();

router.get('/', UserController.getAll);
router.post('/', userMiddleware, UserController.create);
router.post('/login', loginMiddleware, UserController.login);

module.exports = router;

// /register
// /
