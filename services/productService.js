const axios = require('axios');
const ApiResponse = require('./../schemas/apiResponse');
const config = require('./../schemas/config');
class ProductsService {

    async find(searchQuery) {
        let response = await axios.get(`${config.PRODUCTS_URL}${searchQuery}`);
        const category = await this.getCategory(response.data.results.map((item) => item.category_id));
        const results = response.data.results;
        const apiResponse = new ApiResponse();
        apiResponse.setProducts(category, results);
        return apiResponse;
    }

    async detail(id) {
        const dataItem = await axios.get(config.PRODUCT_DETAIL + id);
        const dataItemDescription = await axios.get(config.PRODUCT_DETAIL + id + "/description");
        const category = await this.getCategory([dataItem.data.category_id]);
        const apiResponse = new ApiResponse();
        apiResponse.setDetailProduct(dataItem.data, dataItemDescription.data.plain_text, category);        
        return apiResponse;
    }

    async getCategory(categories) {
        if (categories.length === 0) return null;
        let category = (categories.length > 1) ? "" : categories[0];        
        if (categories.length !== 1) { 
            const uniqueCategories = [...new Set(categories)];
            const coindeceCategory = uniqueCategories.map((item) => {
                return { id: item, coincidences: categories.filter((category) => category === item).length }
            });
            const sortCategories = coindeceCategory.sort((a, b) => { return a.coincidences - b.coincidences });
            category = sortCategories[sortCategories.length - 1].id;
        }
        const categoryData = await axios.get(`${config.CATEGORY_URL}${category}`);
        return categoryData.data.path_from_root;
    }

}

module.exports = ProductsService;