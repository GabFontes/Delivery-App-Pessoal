const { Router } = require('express');
const UserController = require('../controllers/Users')
// const userMiddleware = require('../middlewares/users.middleware');
const router = Router();

router.get('/', UserController.getAll);
router.post('/', UserController.create);

module.exports = router;

// /register
// /
