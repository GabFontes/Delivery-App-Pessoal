const { Router } = require('express');
const userRouter = require('./UserRouter');
const loginRouter = require('./LoginRouter');
const productRouter = require('./ProductRouter');
const saleRouter = require('./SaleRouter');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', userRouter);
router.use('/products', productRouter);
router.use('/sales', saleRouter);

module.exports = router;
