const express = require('express');
const boom = require('@hapi/boom');
const validatorHandler = require('../middlewares/validatorHandler');
const { searchCountrySchema, stateSchema, citySchema, registerSchema } = require('../schemas/sisuSchema');

const router = express.Router();
const SisuService = require('../services/sisuService');
const sisuService = new SisuService();

router.get('/',
    validatorHandler(searchCountrySchema, 'query'),
    async (req, res, next) => {
        try {
            let query = req.query.q;
            const searchQuery = (query) ? query : '';
            const countries = await sisuService.find(searchQuery);;
            res.status(200).send(countries);
        } catch (error) {
            next(boom.badImplementation(error));
        }
    });

router.post('/estados/:countryId',
    validatorHandler(stateSchema, 'params'),
    async (req, res, next) => {
        try {
            const states = await sisuService.states(parseInt(req.params.countryId));
            res.status(200).send(states);
        } catch (error) {
            next(boom.badImplementation(error));
        }
    });

router.post('/ciudades/:stateId',
    validatorHandler(citySchema, 'params'),
    async (req, res, next) => {
        try {
            const cities = await sisuService.cities(parseInt(req.params.stateId));
            res.status(200).send(cities);
        } catch (error) {
            next(boom.badImplementation(error));
        }
    });

router.post('/save',
    validatorHandler(registerSchema, 'body'),
    async (req, res, next) => {
        try {            
            const saveResponse = await sisuService.save(req.body);
            res.status(200).send(saveResponse);
        } catch (error) {
            next(boom.badImplementation(error));
        }
    });



module.exports = router;