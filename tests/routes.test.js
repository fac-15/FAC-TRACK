// // jest works magically yay
// const request = require("supertest");
const app = require("../src/app.js");
//
// test("something passes at last", () => {
//   expect(1).toBe(1);
// });
//
// // may want to modify how we are doing this, but it seems to work:
// // http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/#7-About-the-Database-connection
//
// test("home should return 200 status code with GET request", () => request(app)
//     .get("/")
//     .then(res => {
//       expect(res.statusCode).toBe(200);
//     }));

// describe('Test the dashboard route', () => {
//     test('dashboard should return 200 status code', () => {
//         return request(app).get('/dashboard').then((response) => {
//             expect(response.statusCode).toBe(200);
//             // done();
//         })
//     })
// })

// describe('unknown route', () => {
//     test('unknown route should return 404 status code', () => {
//         return request(app).get('/utfvahksgdvc').then((response) => {
//             expect(response.statusCode).toBe(404);
//             // done();
//         })
//     })
// })
