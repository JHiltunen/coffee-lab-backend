'use strict';

const express = require('express');
const router = express.Router();
const coffeeController = require('../controllers/coffeeController')

router.route('/coffees')
    .get()
    .post()

router.route('/coffees/search')
    .get()