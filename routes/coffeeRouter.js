'use strict';

const express = require('express');
const router = express.Router();
const coffeeController = require('../controllers/coffeeController')

router.route('/coffees')
    .get(coffeeController.get_coffee_list)
    .post(coffeeController.add_new_coffee)

router.route('/coffees/search')
    .get()

module.exports = router;