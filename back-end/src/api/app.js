const express = require('express');
const router = require('../routes/index');
const errorMiddleware = require('../middlewares/error.middleware');
const Cors = require('../middlewares/cors.middleware');

const app = express();
app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(Cors);
app.use(router);
app.use(errorMiddleware);

module.exports = app;
