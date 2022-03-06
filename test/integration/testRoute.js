const supertest = require('supertest');
const {response} = require('../../app');
const app = require('../../app');
const assert = require('assert');

/**
 * Testing get all coffees endpoint
 *  
 */
describe('GET /coffees', function() {
    it('responds with json containing a list of all coffees', function (done) {
        supertest(app)
        .get('/coffees/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
});

describe('GET /coffees/search?q=juh', function() {
    it('responds with json containing a list of all coffees thats name includes "juh"', function (done) {
        supertest(app)
        .get('/coffees/search?q=juh')
        .expect(/[{ name: 'Juhlamokka', weight: '120', price: '400', roast_level: '5' },{ name: 'Juhlamokka Tummapaahto', weight: '345', price: '556', roast_level: '4' }]/)
        .expect(200, done);
    })
});

describe('GET /coffees/search?q=xy', function() {
    it('responds with json empty list', function (done) {
        supertest(app)
        .get('/coffees/search?q=xy')
        .expect([])
        .expect(200, done);
    })
});

describe('GET /', function() {
    it('responds with "Not in use" text ', function (done) {
        supertest(app)
        .get('/')
        .expect((response) => {
            assert.ok(response.text.includes('Not in use'))
        })
        .expect(200, done);
    })
});