'use strict';

const { fileExists } = require("../utils/fileHandler");

const fs = require('fs');

var coffeeData;

const getAllCoffees = () => {
    
    if (fileExists) {
        return fs.readFileSync('./coffees/coffees.json', 'utf8', function(err, data) {return data});
    } else {
        return 'No data available'
    }
};

const addCoffee = (coffee) => {

};

module.exports = {
    getAllCoffees,
    addCoffee,
};