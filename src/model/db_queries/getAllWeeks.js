// add a get all data function here
const db = require('../db_connection');

// use an inner join to get some user details
// - this outputs json object, which includes past talks
const getAllWeeks = cb => {
  dbConnection.query('SELECT week_name FROM weeks',
  (err, res) => {
    if (err) {
      console.log(' database connection error in getAllWeeks :', err);
      cb(err);
    }
    else {
      cb(null, res.rows);
    }
  });
};

module.exports = getAllWeeks;