const express = require('express');
const boom = require('@hapi/boom');
const validatorHandler = require('./../middlewares/validatorHandler');
const { detailProductSchema, searchProductSchema } = require('./../schemas/productSchema');


const ProductsService = require('./../services/productService');

const router = express.Router();
const productService = new ProductsService();

router.get('/', async (req, res,next) => {
    try {
        const products = await productService.find();
        res.status(200).send(products);        
    } catch (error) {                 
        next(boom.badImplementation(error));
    }
});

router.get('/items/:id', 
    validatorHandler(detailProductSchema, 'params'),
    async (req, res,next) => {
    try {        
        res.status(200).send("Detail product");        
    } catch (error) {                 
        next(boom.badImplementation(error));
    }
});

module.exports = router;