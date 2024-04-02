const countries = [
    {
        "id": 1,
        "nombre": "México"
    },
    {
        "id": 2,
        "nombre": "Estados Unidos"
    },
    {
        "id": 3,
        "nombre": "Canadá"
    }
];

const states = [
    {
        "id": 1,
        "paisId": 1,
        "nombre": "Chihuahua"
    },
    {
        "id": 2,
        "paisId": 1,
        "nombre": "Nayarit"
    },
    {
        "id": 3,
        "paisId": 2,
        "nombre": "Ohio"
    },
    {
        "id": 4,
        "paisId": 2,
        "nombre": "Texas"
    },
    {
        "id": 5,
        "paisId": 3,
        "nombre": "Manitoba"
    },
    {
        "id": 6,
        "paisId": 3,
        "nombre": "Alberta"
    }
]

const cities = [
    {
        "id": 1,
        "estadoId": 1,
        "nombre": "Juárez"
    },
    {
        "id": 2,
        "estadoId": 1,
        "nombre": "Chihuahua"
    },
    {
        "id": 3,
        "estadoId": 2,
        "nombre": "La palma"
    },
    {
        "id": 4,
        "estadoId": 2,
        "nombre": "Tepic"
    },
    {
        "id": 5,
        "estadoId": 3,
        "nombre": "Columbus"
    },
    {
        "id": 6,
        "estadoId": 3,
        "nombre": "Springfield"
    },
    {
        "id": 7,
        "estadoId": 4,
        "nombre": "San Antonio"
    },
    {
        "id": 8,
        "estadoId": 4,
        "nombre": "Austin"
    },
    {
        "id": 9,
        "estadoId": 5,
        "nombre": "Winnipeg"
    },
    {
        "id": 10,
        "estadoId": 5,
        "nombre": "Winkler"
    },
    {
        "id": 11,
        "estadoId": 6,
        "nombre": "Lacombe"
    },
    {
        "id": 12,
        "estadoId": 6,
        "nombre": "Calgary"
    }
]

module.exports = { countries, states, cities }