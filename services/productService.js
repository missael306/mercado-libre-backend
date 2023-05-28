const axios = require('axios');
const ApiResponse = require('./../schemas/apiResponse');
const config = require('./../schemas/config');
class ProductsService { 

    async find(searchQuery) {        
        let response = await axios.get(`${config.PRODUCTS_URL}${searchQuery}`);
        const categories = response.data.available_filters.find(filter => filter.id === 'category');        
        const availableCategories = (!categories) ? [] : categories.values;
        const results = response.data.results;
        const apiResponse = new ApiResponse();        
        apiResponse.setProducts(availableCategories, results);
        return apiResponse;
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