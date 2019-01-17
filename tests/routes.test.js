// jest works magically yay
const request = require("supertest");
const app = require("../src/app");


// may want to modify how we are doing this, but it seems to work:
// http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/#7-About-the-Database-connection

describe('Test the home route', () => {
    test('home should return 200 status code', () => {
        return request(app).get('/').then((res) => {
            expect(res.statusCode).toBe(200);
            // done();
        })
    })
})

describe('Test the dashboard route', () => {
    test('dashboard should return 200 status code', () => {
        return request(app).get('/dashboard').then((response) => {
            expect(response.statusCode).toBe(200);
            // done();
        })
    })
})

describe('unknown route', () => {
    test('unknown route should return 404 status code', () => {
        return request(app).get('/utfvahksgdvc').then((response) => {
            expect(response.statusCode).toBe(404);
            // done();
        })
    })
})

