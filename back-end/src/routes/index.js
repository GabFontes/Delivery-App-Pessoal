const { Router } = require('express');
const adminRouter = require('./AdmRouter');
const loginRouter = require('./LoginRouter');
const productRouter = require('./ProductRouter');
const saleRouter = require('./SaleRouter');
const userRouter = require('./UserRouter');

const router = Router();

router.use('/login', loginRouter);
router.use('/register', userRouter);
router.use('/products', productRouter);
router.use('/sales', saleRouter);
router.use('/admin', adminRouter);

module.exports = router;
