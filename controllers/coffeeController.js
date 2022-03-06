'use strict';
const coffeeModel = require('../models/coffeeModel');

const fs = require('fs')

const not_in_use = (req, res) => {
    res.send('Not in use')
}

const get_coffee_list = (req, res) => {
    res.json(JSON.parse(coffeeModel.getAllCoffees()));
};

const add_new_coffee = (req, res) => {

    // create coffee object
    /*var newCoffee ={
        name: req.body.name,
        weight: req.body.weight,
        price: req.body.price,
        roast_level: req.body.roast_level,
    };*/

   // console.log("New coffee: ", newCoffee);

    res.json(coffeeModel.addCoffee(req.body));
}

const get_coffee_list_search = (req, res) => {
    const searchTerm = req.query.q;
    res.json(coffeeModel.searchCoffees(searchTerm));
};

module.exports = {
    not_in_use,
    get_coffee_list,
    get_coffee_list_search,
    add_new_coffee,
};

