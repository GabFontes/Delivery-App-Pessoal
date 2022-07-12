const express = require('express');
const router = require('../routes/index');
const errorMiddleware = require('../middlewares/error.middleware');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(router);
app.use(errorMiddleware);

module.exports = app;
