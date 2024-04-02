const Joi = require('joi');

const q = Joi.string();
const countryId = Joi.number().integer();

const searchCountrySchema = Joi.object({    
    q: q.optional
});

const stateSchema = Joi.object({
    countryId: countryId.required()
});

module.exports = { searchCountrySchema, stateSchema }