const { Router } = require('express');
const UserController = require('../controllers/Users')
const userMiddleware = require('../middlewares/users.middleware');
const router = Router();

router.get('/', userMiddleware, () => console.log('sucesso'));
router.post('/', () => UserController.create);

module.exports = router;

// /register
// /
