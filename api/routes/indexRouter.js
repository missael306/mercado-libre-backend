const express = require('express');

const sisuRouter = require('./sisuRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);    
    router.use('/sisu', sisuRouter);
    
}

module.exports = routerApi;