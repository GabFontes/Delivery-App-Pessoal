const { Router } = require('express');
const userRouter = require('./UserRouter');
const loginRouter = require('./LoginRouter');
const productRouter = require('./ProductRouter');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', userRouter);
router.use('/products', productRouter);

module.exports = router;
