const db = require("../db/db_connection");

const checkTasksList = task =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM tasks WHERE url_slug = '${task}'`, (err, res) => {
      if (err) {
        reject("week name not in the database", err);
      } else {
        resolve(res.rows);
      }
    });
  });

module.exports = checkTasksList;