'use strict';
const coffeeModel = require('../models/coffeeModel')

const get_coffee_list = (req, res) => {
    const coffees = coffeeModel.getAllCoffees()
    
    res.json(coffees);
};

module.exports = {
    get_coffee_list,
};

