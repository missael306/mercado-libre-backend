const Joi = require('joi');

const query = Joi.string();
const id = Joi.string().alphanum();

const searchProductSchema = Joi.object({    
    query: query.required()    
});

const detailProductSchema = Joi.object({    
    id: id.required()    
});

module.exports = { searchProductSchema, detailProductSchema}