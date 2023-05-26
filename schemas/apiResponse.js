const config = require('./../schemas/config');

const author = {
    name : config.AUTHOR_NAME,
    lastname : config.AUTHOR_LASTNAME
}

class ApiResponse{
    constructor(data){
        this.author = author
    }

    setProducts(categories = [], items = []){        
        this.categories = categories;
        this.items = items;
    }

    setDetailProduct(item = {}, description = ""){
        this.item = item;
        this.item.description = description;
    }
}

module.exports = ApiResponse;