const express = require('express');

const ProductsService = require('./../services/productService');

const router = express.Router();
const productService = new ProductsService();

router.get('/', async (req, res,next) => {
    try {
        const products = await productService.find2();
        res.status(200).send(products);
    } catch (error) {                 
        next(error);
    }
});

module.exports = router;