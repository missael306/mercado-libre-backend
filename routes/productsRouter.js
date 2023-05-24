const express = require('express');

const ProductsService = require('./../services/productService');

const router = express.Router();
const productService = new ProductsService();

router.get('/', async (req, res) => {
    const products = await productService.find();        
    res.status(200).send(products);
});

module.exports = router;