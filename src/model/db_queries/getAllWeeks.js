// add a get all data function here
const db = require("../db/db_connection");

// get all weeks from the database
const getAllWeeks = () => new Promise((resolve, reject) => {
    db.query("SELECT * FROM weeks", (err, res) => {
      if (err) {
        reject("no weeks found in database ", err);
      } else {
        resolve(res.rows);
      }
    });
});

module.exports = getAllWeeks;