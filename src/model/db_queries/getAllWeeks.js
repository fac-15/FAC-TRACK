// add a get all data function here
const db = require("../db/db_connection");

// get all weeks from the database
const getAllWeeks = () => new Promise((resolve, reject) => {
    console.log("in getallweeks function");
    db.query("SELECT * FROM weeks", (err, res) => {
      if (err) {
        reject("no weeks found in database ", err);
      } else {
        resolve(res.rows);
      }
    });
  });

// const getAllWeeks = cb => {
//   dbConnection.query('SELECT week_name FROM weeks',
//   (err, res) => {
//     if (err) {
//       console.log(' database connection error in getAllWeeks :', err);
//       cb(err);
//     }
//     else {
//       cb(null, res.rows);
//     }
//   });
// };

module.exports = getAllWeeks;
