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
        apiResponse.setProducts(response.data.categories, response.data.items);
        this.products = apiResponse;
    }

    find() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.products);
            }, 3000);
        })
    }

}

module.exports = ProductsService;