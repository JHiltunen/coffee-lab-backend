'use strict';
const coffeeModel = require('../models/coffeeModel')

const get_coffee_list = (req, res) => {
    const coffees = coffeeModel.getAllCoffees()
    
    res.json( {
        "coffees": [{
                "name": "Paulig tummapaahto",
                "weight": 165.5,
                "price": 120,
                "roast_level": "5"
            },
            {
                "name": "Paulig",
                "weight": 185.5,
                "price": 230,
                "roast_level": "2"
            }
        ]
    });
};

module.exports = {
    get_coffee_list,
};

