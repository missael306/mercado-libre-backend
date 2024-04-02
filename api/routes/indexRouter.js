const express = require('express');

const productsRouter = require('./productsRouter');
const sisuRouter = require('./sisuRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/items', productsRouter);
    router.use('/sisu', sisuRouter);
}

module.exports = routerApi;