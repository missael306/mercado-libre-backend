const axios = require('axios');
const ApiResponse = require('./../schemas/apiResponse');

require('dotenv').config();

class ProductsService {

    constructor() {
        this.products = {};
        this.init();
    }

    async init() {
        let response = await axios.get(process.env.PRODUCTS_URL);
        const apiResponse = new ApiResponse();        
        const categories = response.data.available_filters.find(filter => filter.id === 'category');
        const results = response.data.results;
        apiResponse.setProducts(categories.values, results);
        this.products = apiResponse;
    }

    find() {
        return this.products;
    }

}

module.exports = ProductsService;