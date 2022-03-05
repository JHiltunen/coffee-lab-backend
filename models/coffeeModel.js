'use strict';

const { fileExists } = require("../utils/fileHandler");

const getAllCoffees = () => {
    if (fileExists) {
        return 'Jee'
    } else {
        return 'Noup'
    }
};

const addCoffee = (coffee) => {

};

module.exports = {
    getAllCoffees,
    addCoffee,
};