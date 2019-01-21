// run test database build script
const testBuild = require("../src/model/db/test_db_build.js"); // could also be db_build.js

// get database queries to test
const queryIndex = require("../src/model/db_queries/index.js");

/*
jest stuff

assertions
https://jestjs.io/docs/en/expect#expectassertionsnumber

NOTE: db_build.sql, not test build file seems to be called here.
Test sql just has week 1, but getAllWeeks returns 4 of them

*/

// get all weeks
// queryIndex.getAllWeeks
const allWeeks = [
  { id: 1, week_name: "Toolkit" },
  { id: 2, week_name: "Testing" },
  { id: 3, week_name: "API" },
  { id: 4, week_name: "Node Core" }
];

test("getAllWeeks returns weeks 1 - 4", () => {
  testBuild((error, response) => {
    if (error) {
      return error;
    }
    expect.assertions(1);
    return expect(queryIndex.getAllWeeks()).resolves.toEqual(allWeeks);
  });
});

// get tasks by week
// queryIndex.getTasksByWeek
const weekTwoTasks = [
  {
    name: "Test Driven Development workshop: Fizzbuzz",
    repo_link: "https://github.com/foundersandcoders/fizzbuzz"
  },
  {
    name: "DOM manipulation challenge",
    repo_link: "https://github.com/foundersandcoders/DOM-manipulation-Challenge"
  },
  {
    name: "Pure functions workshop",
    repo_link:
      "https://github.com/foundersandcoders/ws-pure-functions-easy-testing"
  }
];

test("getTasksByWeek for week 2", () => {
  testBuild((error, response) => {
    if (error) {
      return error;
    }
    expect.assertions(1);
    expect(queryIndex.getTasksByWeek(2)).resolves.toEqual(weekTwoTasks);
  });
});

test("getTasksByWeek for week 0", () => {
  testBuild((error, response) => {
    if (error) {
      return error;
    }
    expect.assertions(1);
    expect(queryIndex.getTasksByWeek(0)).resolves.toEqual([]);
  });
});

// getConfidenceForUser Testing
// const confidence_for_user = [
//   { confidence: 3, weekId: 1 },
//   { confidence: 2, weekId: 1 },
//   { confidence: 2, weekId: 1 },
//   { confidence: 3, weekId: 1 }
// ];
//
// test("get Confidence For dave", () => {
//   testBuild((error, response) => {
//     if (error) {
//       return error;
//     }
//     expect.assertions(1);
//     expect(queryIndex.getConfidenceForUser("dave")).resolves.toEqual(
//       confidence_for_user
//     );
//   });
// });
