const axios = require('axios');
const ApiResponse = require('./../schemas/apiResponse');
const config = require('./../schemas/config');
class ProductsService {

    constructor() {
        this.products = {};
        this.init();
    }

    async init() {
        let response = await axios.get(config.PRODUCTS_URL);
        const categories = response.data.available_filters.find(filter => filter.id === 'category');
        const results = response.data.results;
        const apiResponse = new ApiResponse();
        apiResponse.setProducts(categories.values, results);
        this.products = apiResponse;
    }

    find() {
        return this.products;
    }

    async detail(id) {
        let dataItem = await axios.get(config.PRODUCT_DETAIL + id);
        let dataItemDescription = await axios.get(config.PRODUCT_DETAIL + id + "/description");
        const apiResponse = new ApiResponse();
        apiResponse.setDetailProduct(dataItem.data, dataItemDescription.data.plain_text);
        return apiResponse;
    }

}

module.exports = ProductsService;