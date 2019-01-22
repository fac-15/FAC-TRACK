const db = require("../db/db_connection");

const weekExist = week =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM weeks WHERE url_slug = '${week}'`, (err, res) => {
      if (err) {
        reject("week name not in the database", err);
      } else {
        resolve(res.rows);
      }
    });
  });

module.exports = weekExist;
