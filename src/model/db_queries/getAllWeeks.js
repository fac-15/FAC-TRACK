// add a get all data function here
const db = require('../db/db_connection');

// get all weeks from the database
const getAllWeeks = () => {
  return new Promise((resolve, reject) => {
      db.query('SELECT week_name FROM weeks',
      (err, res) => {
          if (err) {
              reject('no weeks found in database ', err);
          }
          else {
              resolve(res.rows);
          }
      })
  })
}


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


