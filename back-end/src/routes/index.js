const { Router } = require('express');
const userRouter = require('./UserRouter');
const loginRouter = require('./LoginRouter');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', userRouter);

module.exports = router;
