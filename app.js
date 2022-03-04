'use strict';

const express = require('express');
const app = express();
const port = 3000;
const coffeeRouter = require('./routes/coffeeRouter');

app.use(express.static('public')); // serve static content of public folder. These files can be accessed publicly
app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});