require('dotenv').config();


const author = {
    name : process.env.AUTHOR_NAME,
    lastname : process.env.AUTHOR_LASTNAME
}

class ApiResponse{
    constructor(data){
        this.author = author
    }

    setProducts(categories = [], items = []){        
        this.categories = categories,
        this.items = items
    }
}

module.exports = ApiResponse;