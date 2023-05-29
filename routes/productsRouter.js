const express = require('express');
const boom = require('@hapi/boom');
const validatorHandler = require('./../middlewares/validatorHandler');
const { detailProductSchema, searchProductSchema } = require('./../schemas/productSchema');


const ProductsService = require('./../services/productService');

const router = express.Router();
const productService = new ProductsService();

router.get('/', async (req, res, next) => {
    try {
        let query = req.query.q;
        const searchQuery = (query) ? query : '';
        const products = await productService.find(searchQuery);
        res.status(200).send(products);
    } catch (error) {        
        next(boom.badImplementation(error));
    }
});

router.get('/:id',
    validatorHandler(detailProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const detailProduct = await productService.detail(req.params.id);
            res.status(200).send(detailProduct);
        } catch (error) {            
            next(boom.badImplementation(error));
        }
    });

module.exports = router;