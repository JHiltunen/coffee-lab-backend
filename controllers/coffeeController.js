'use strict';
const coffeeModel = require('../models/coffeeModel');

const fs = require('fs')

const get_coffee_list = (req, res) => {
    res.json(JSON.parse(coffeeModel.getAllCoffees()));
};

module.exports = {
    get_coffee_list,
};

