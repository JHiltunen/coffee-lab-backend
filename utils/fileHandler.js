'use strict';

const fs = require('fs');
const path = '../coffees/coffees.json'

const fileExists = () => {
    try {
        if (fs.existsSync(path)) {
            // file exists
            console.log('File: ' + path + 'exists')
            return true
        }
    } catch (error) {
        console.log(error)
        return false
    }
};

module.exports = {
    fileExists,
}