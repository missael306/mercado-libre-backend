const express = require('express');

const productsRouter = require('./productsRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/items', productsRouter);
}

module.exports = routerApi;