const express = require('express');
const router = require('../routes/index');
const errorMiddleware = require('../middlewares/error.middleware');
const Cors = require('../middlewares/cors.middleware');

const app = express();
app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(Cors);


//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static('public'));

app.use(router);
app.use(errorMiddleware);

module.exports = app;
