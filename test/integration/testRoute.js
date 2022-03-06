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