'use strict';

const { fileExists } = require("../utils/fileHandler");

const fs = require('fs');

const getAllCoffees = () => {
    
    if (fileExists) {
        return fs.readFileSync('./coffees/coffees.json', 'utf8', function(err, data) {return data});
    } else {
        return 'No data available'
    }
};

const addCoffee = (coffee) => {
    var coffees = JSON.parse(getAllCoffees());
    console.log("Before update: ", coffees);
    coffees['coffees'].push(coffee)
    console.log("After update: ", coffees);
};

module.exports = {
    getAllCoffees,
    addCoffee,
};