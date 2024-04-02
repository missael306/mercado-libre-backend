const axios = require('axios');
const ApiResponse = require('../schemas/apiResponse');
const config = require('../schemas/config');
const { countries, states, cities } = require('../data/data');

class SisuService {

    async find(searchQuery) {
        const response = countries;
        const apiResponse = new ApiResponse();
        apiResponse.setCountries(response);
        return apiResponse;
    }

    async states(countryId) {
        const response = states.filter((state) => state.paisId === countryId);
        const apiResponse = new ApiResponse();
        apiResponse.setStates(response);
        return apiResponse;
    }

    async cities(stateId) {
        const response = cities.filter((city) => city.estadoId === stateId);
        const apiResponse = new ApiResponse();
        apiResponse.setCities(response);
        return apiResponse;
    }

    async save(register) {
        TODO: 'Save the register in database';
        const apiResponse = new ApiResponse();        
        apiResponse.setRegisterSave(config.REGISTER_SAVE_MESSAGE);
        return apiResponse;
    }

}

module.exports = SisuService;