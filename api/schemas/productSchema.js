const Joi = require('joi');

const q = Joi.string();
const id = Joi.string().alphanum();

const searchProductSchema = Joi.object({    
    q: q.required()    
});

const detailProductSchema = Joi.object({    
    id: id.required()    
});

module.exports = { searchProductSchema, detailProductSchema}