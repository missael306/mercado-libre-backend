const express = require('express');
const boom = require('@hapi/boom');
const validatorHandler = require('../middlewares/validatorHandler');
const { searchCountrySchema, stateSchema } = require('../schemas/sisuSchema');

const router = express.Router();

router.get('/',
    validatorHandler(searchCountrySchema, 'query'),
    async (req, res, next) => {
        try {
            let query = req.query.q;
            const searchQuery = (query) ? query : '';
            const countries = ["México", "Estados Unidos", "Canadá"];
            res.status(200).send(countries);
        } catch (error) {
            next(boom.badImplementation(error));
        }
    });

router.get('/:id',
    validatorHandler(stateSchema, 'params'),
    async (req, res, next) => {
        try {
            const states = ["Chihuahua", "Nayarit"];
            res.status(200).send(states);
        } catch (error) {
            next(boom.badImplementation(error));
        }
    });

module.exports = router;