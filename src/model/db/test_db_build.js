// synchronous test build
// - avoid error: 'Cannot use a pool after calling end on the pool'
// - from async db_build.js function and db queries
const fs = require('fs');
const dbConnection = require('./db_connection.js');
const sql = fs.readFileSync(`${__dirname}/test_db_build.sql`).toString();

const testBuild = (cb) => {
  dbConnection.query(sql, cb);
};

testBuild();

module.exports = testBuild;