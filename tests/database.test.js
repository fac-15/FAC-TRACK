// run test database build script
const testBuild = require("../src/model/db/test_db_build.js"); // could also be db_build.js

// get database queries to test
const queryIndex = require("../src/model/db_queries/index.js");


// database test
// queryIndex.getAllData

// testing database with jest
// http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/


describe('Test getAllData function', () => {
    beforeAll(() => {
        // mongoDB.connect();
    });
    afterAll((done) => {
        // mongoDB.disconnect(done);
        // probably test the queryIndex.getAllData function here

    });
}



// test("getAllData function returns subject", t => {
//     testBuild((error, response) => {
//       if (error) {
//         console.log("testBuild error: ", error);
//       } else {
//         queryIndex.getAllData((err, res) => {
//           if (err) {
//             console.log("getTalks error: ", err);
//           } else {
//             // console.log("result from getTalks: ", res);
//             t.deepEqual(
//               res[0].subject,
//               "SCSS",
//               "The first entered talk subject in the test database should be SCSS"
//             );
//             t.end();
//           }
//         });
//       }
//     });
// });