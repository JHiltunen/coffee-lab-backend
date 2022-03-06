'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080
const coffeeRouter = require('./routes/coffeeRouter');

app.use(cors());
app.use(express.static('public')); // serve static content of public folder. These files can be accessed publicly
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', coffeeRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;