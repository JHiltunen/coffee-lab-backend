# coffee-lab-backend

Backend for coffee-lab app. Allows you to save information about your favourite coffees. Data is aved to json file on server.

## Backend flow
![CoffeeLabBackendFlow](https://user-images.githubusercontent.com/37395957/156987322-217a4727-2aa1-4d0c-97d1-57b1240fe21f.png)


**NOTE: PUT and DELETE aren't implemented**

## Environments
- Coffee-lab-Backend is running on [Heroku](https://coffee-lab-backend.herokuapp.com/coffees/)

## Usage
These endpoints allows you to interact with the backend.
## GET
`/coffees/` returns all coffees in json format.

`/coffees/search?q="search_term"` returns all coffees that's name includes search_term. Returns in json.
- Replace "search_term" with the keyword used for search.

**Parameters**


| Name          | Required      | Type  |
| ------------- |:-------------:| -----:|
| `q`           | true          |string |

## POST
`/coffees/` Adds new coffee.

**application/x-www-form-urlencoded**


| Name          | Required      | Type  | Additional info:|
| ------------- |:-------------:| -----:| ---------------:|
| name          | true          |string |                 |
| weight        | true          |int    |  weight in grams| 
| price         | true          |int    |   price in cents|
| roast_level   | true          |int    |                 |

---
## Requirements

For development, you will only need Node.js and Node.js package manager, installed in your environement.

### Node
- #### Node installation on Windows
  Install [node.js](https://nodejs.org/en/) to get the package manager **npm**

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.14.0

    $ npm --version
    8.3.1

---

## Install

    $ git clone https://github.com/JHiltunen/coffee-lab-backend.git
    $ cd coffee-lab-backend
    $ npm install

## Configure app

Open `/models/coffeeModel.js`. You will need to:

- Change every `./coffees/coffees.json` to location you want to use for storing data and reading data.

Open `/utils/fileHandler.js` and find `const path`. You will need:
- Set this value to location you want to use for storing data and reading data.

## Running the project

    $ node app.js

## Testing the project

    $ npm test
