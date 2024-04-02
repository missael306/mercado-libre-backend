const Joi = require('joi');

const q = Joi.string();
const countryId = Joi.number().integer();
const stateId = Joi.number().integer();
const cityId = Joi.number().integer().required();
const name = Joi.string().required();
const age = Joi.number().integer().required();

const searchCountrySchema = Joi.object({
    q: q.optional
});

const stateSchema = Joi.object({
    countryId: countryId.required()
});

const citySchema = Joi.object({
    stateId: stateId.required()
});

const registerSchema = Joi.object({
    cityId: cityId,
    name: name,
    age: age
});

module.exports = { searchCountrySchema, stateSchema, citySchema, registerSchema }