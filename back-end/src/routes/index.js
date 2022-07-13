const { Router } = require('express');
const userRouter = require('./UserRouter');

const router = Router();

router.use('/user', userRouter);

module.exports = router;
