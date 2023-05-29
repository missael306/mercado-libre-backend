require('dotenv').config();

const config = {
    AUTHOR_NAME: (process.env.AUTHOR_NAME) ? process.env.AUTHOR_NAME : "Missael",
    AUTHOR_LASTNAME: (process.env.AUTHOR_LASTNAME) ? process.env.AUTHOR_LASTNAME : "Armenta",
    PRODUCTS_URL: (process.env.PRODUCTS_URL) ? process.env.PRODUCTS_URL : "https://api.mercadolibre.com/sites/MLA/search?q=",
    ALLOW_ORIGINS: (process.env.ALLOW_ORIGINS) ? process.env.ALLOW_ORIGINS : "['http://localhost:3001']",
    PRODUCT_DETAIL: (process.env.PRODUCT_DETAIL) ? process.env.PRODUCT_DETAIL : "https://api.mercadolibre.com/items/",
    CATEGORY_URL: (process.env.CATEGORY_URL) ? process.env.CATEGORY_URL : "https://api.mercadolibre.com/categories/",       
}

module.exports = config;