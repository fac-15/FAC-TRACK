const getConfidenceForUser = require("../src/model/db_queries/getConfidenceForUser");
const testBuild = require("../src/model/db/test_db_build.js");
const { users, logs } = require("./test_fixtures");

/// unfinished : starting with a more simple test

test("get Confidence For dave", () => {
  testBuild((error, response) => {
    if (error) {
      return error;
    }
    expect.assertions(1);
    expect(queryIndex.getConfidenceForUser("dave")).resolves.toEqual(users);
  });
});
