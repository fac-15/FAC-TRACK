// jest works magically yay
const request = require("supertest");
const app = require("../src/app");


describe('Test the home route', () => {
    test('home should return 200 status code',  (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})

describe('Test the dashboard route', () => {
    test('dashboard should return 200 status code',  (done) => {
        request(app).get('/dashboard').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
})

describe('unknown route', () => {
    test('unknown route should return 404 status code',  (done) => {
        request(app).get('/utfvahksgdvc').then((response) => {
            expect(response.statusCode).toBe(404);
            done();
        })
    })
})