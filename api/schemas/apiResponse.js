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

    setDetailProduct(item = {}, description = "", categories = []){
        this.item = item;
        this.item.description = description;        
        this.categories = categories;
    }

    setCountries(items = []){                
        this.items = items;        
    }

    setStates(items = []){                
        this.items = items;        
    }

    setCities(items = []){                
        this.items = items;        
    }

    setRegisterSave(message){
        this.message = message;
    }
}

module.exports = ApiResponse;