const supertest = require('supertest');
const app = require('../../app');

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